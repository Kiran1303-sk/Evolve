'use client';

import { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';

export default function HeroControls() {
  const audioRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const [night, setNight] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    document.querySelector('.lux-root')?.classList.toggle('night-mode', night);
  }, [night]);

  useEffect(() => {
    if (!soundOn) {
      gainRef.current?.gain.exponentialRampToValueAtTime(
        0.0001,
        (audioRef.current?.currentTime || 0) + 0.25
      );
      oscillatorRef.current?.stop((audioRef.current?.currentTime || 0) + 0.3);
      oscillatorRef.current = null;
      return;
    }

    const context = audioRef.current || new AudioContext();
    audioRef.current = context;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 96;
    gain.gain.value = 0.0001;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    gain.gain.exponentialRampToValueAtTime(0.018, context.currentTime + 0.5);
    oscillatorRef.current = oscillator;
    gainRef.current = gain;
  }, [soundOn]);

  return (
    <div className="hero-controls" aria-label="Experience controls">
      <button
        type="button"
        onClick={() => setSoundOn((value) => !value)}
        aria-label="Toggle ambient sound"
      >
        {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
      </button>
      <button
        type="button"
        onClick={() => setNight((value) => !value)}
        aria-label="Toggle day night view"
      >
        {night ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </div>
  );
}
