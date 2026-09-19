import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';

/* ─────────────────────────────────────────────────────
   Traditional Kerala Nilavilakku (Brass Oil Lamp) SVG
   ───────────────────────────────────────────────────── */
const Nilavilakku = ({ className = "w-20 h-28" }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Flickering Flame Glow Aura */}
    <motion.div
      animate={{ scale: [1, 1.2, 0.95, 1.15, 1], opacity: [0.75, 0.95, 0.65, 0.9, 0.75] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="absolute -top-3 w-10 h-10 rounded-full bg-[var(--color-gold-mid)]/30 blur-md pointer-events-none"
    />
    <svg viewBox="0 0 100 140" className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(212,175,55,0.5)]" fill="none">
      <defs>
        <linearGradient id="lampGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef4cf" />
          <stop offset="35%" stopColor="#e1be65" />
          <stop offset="75%" stopColor="#b38b34" />
          <stop offset="100%" stopColor="#fef4cf" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      {/* Animated Sacred Flame */}
      <motion.path
        animate={{
          d: [
            "M50 8 C47 16 43 22 46 26 C48 29 52 29 54 26 C57 22 53 16 50 8 Z",
            "M50 6 C46 15 42 22 45 26 C47 30 53 30 55 26 C58 22 54 15 50 6 Z",
            "M50 9 C48 17 44 22 47 26 C49 29 51 29 53 26 C56 22 52 17 50 9 Z"
          ]
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        fill="url(#flameGrad)"
        filter="drop-shadow(0 0 4px #f59e0b)"
      />
      <path d="M48 25 L52 25 L51 30 L49 30 Z" fill="#78350f" />
      <circle cx="50" cy="31" r="3" fill="url(#lampGold)" />
      <path d="M30 35 C30 33 70 33 70 35 C68 40 32 40 30 35 Z" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.5" />
      <ellipse cx="50" cy="34.5" rx="20" ry="2" fill="#fef4cf" opacity="0.6" />
      <path d="M47 37 L53 37 L52 48 L48 48 Z" fill="url(#lampGold)" />
      <circle cx="50" cy="50" r="4.5" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.5" />
      <path d="M48 54 L52 54 L53 85 L47 85 Z" fill="url(#lampGold)" />
      <circle cx="50" cy="70" r="3.5" fill="url(#lampGold)" />
      <circle cx="50" cy="86" r="5" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.5" />
      <path d="M38 91 C38 89 62 89 62 91 C60 95 40 95 38 91 Z" fill="url(#lampGold)" />
      <path d="M46 95 L54 95 L58 118 L42 118 Z" fill="url(#lampGold)" />
      <path d="M26 120 C26 116 74 116 74 120 L76 128 C76 132 24 132 24 128 Z" fill="url(#lampGold)" stroke="#78350f" strokeWidth="0.7" />
      <ellipse cx="50" cy="122" rx="24" ry="3" fill="#fef4cf" opacity="0.5" />
      <ellipse cx="50" cy="128" rx="26" ry="3.5" fill="#78350f" opacity="0.3" />
    </svg>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.wedding.rawDate).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, max: 365 },
    { label: 'Hours', value: timeLeft.hours, max: 24 },
    { label: 'Minutes', value: timeLeft.minutes, max: 60 },
    { label: 'Seconds', value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section id="countdown" className="py-16 px-4 bg-gradient-to-r from-[var(--color-bg-base)] via-[var(--color-bg-surface)] to-[var(--color-bg-base)] border-y border-[var(--color-gold-border)] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--color-gold-mid)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-gold-light)] text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[var(--color-gold-mid)]" />
            <span>Auspicious Vedic Horologue</span>
            <Sparkles className="w-4 h-4 text-[var(--color-gold-mid)]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient uppercase tracking-widest drop-shadow-md">
            Countdown to Muhurtham
          </h2>
          <p className="font-garamond text-[var(--color-text-muted)] text-base sm:text-lg italic mt-2">
            {weddingData.wedding.date} • Muhurtham {weddingData.wedding.muhurtham}
          </p>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-gold-mid)] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Central Sacred Nilavilakku */}
        <div className="mb-8 flex flex-col items-center">
          <Nilavilakku className="w-20 h-28 sm:w-24 sm:h-32" />
          <span className="font-garamond italic text-xs sm:text-sm text-[var(--color-gold-light)] tracking-widest mt-2 font-medium">
            Auspicious Divine Flame
          </span>
        </div>

        {/* 4 Vedic Astrolabe Dials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl w-full mx-auto">
          {timeUnits.map((unit, index) => {
            const circumference = 2 * Math.PI * 46;
            const progress = (unit.value % unit.max) / unit.max;
            const strokeDashoffset = circumference - progress * circumference;

            return (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative flex flex-col items-center justify-center group"
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                  {/* Glow halo */}
                  <div className="absolute inset-2 rounded-full bg-[var(--color-gold-mid)]/10 blur-md group-hover:bg-[var(--color-gold-mid)]/20 transition-all" />

                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id={`astroGold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef4cf" />
                        <stop offset="35%" stopColor="#e1be65" />
                        <stop offset="70%" stopColor="#b38b34" />
                        <stop offset="100%" stopColor="#fef4cf" />
                      </linearGradient>
                    </defs>
                    {/* Sunburst Star Marks */}
                    <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(225,190,101,0.3)" strokeWidth="1.5" strokeDasharray="2 5" />
                    {/* Astrolabe Bevel Border */}
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(225,190,101,0.45)" strokeWidth="1" />
                    {/* Base Track */}
                    <circle cx="60" cy="60" r="46" fill="var(--color-bg-base)" stroke="rgba(225,190,101,0.2)" strokeWidth="3.5" />
                    {/* Active Progress Arc */}
                    <circle
                      cx="60" cy="60" r="46" fill="none"
                      stroke={`url(#astroGold-${index})`}
                      strokeWidth="3.5"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-linear"
                    />
                    {/* Inner Rim */}
                    <circle cx="60" cy="60" r="37" fill="none" stroke="rgba(225,190,101,0.4)" strokeWidth="1" />
                    {/* Center Disc */}
                    <circle cx="60" cy="60" r="34" fill="var(--color-bg-surface)" fillOpacity="0.95" />
                  </svg>

                  {/* Orbiting Spark (Seconds only) */}
                  {unit.label === 'Seconds' && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                      className="absolute inset-0 pointer-events-none flex items-start justify-center"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold-light)] shadow-[0_0_10px_rgba(225,190,101,0.8)] -mt-1" />
                    </motion.div>
                  )}

                  {/* Value & Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="font-cinzel font-black text-3xl sm:text-4xl text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="font-cinzel text-[10px] sm:text-xs text-[var(--color-gold-light)] tracking-[0.2em] uppercase font-bold mt-0.5">
                      {unit.label}
                    </div>
                  </div>

                  {/* Jewel Ornaments */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-gold-light)] shadow-[0_0_8px_rgba(225,190,101,0.8)]" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-gold-mid)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex items-center justify-center gap-2.5 text-[var(--color-text-muted)] font-garamond italic text-base sm:text-lg">
          <Heart className="w-4 h-4 text-[var(--color-gold-mid)] fill-[var(--color-gold-mid)]" />
          <span>Counting down every sacred second until the Thali Kettu Muhurtham</span>
          <Heart className="w-4 h-4 text-[var(--color-gold-mid)] fill-[var(--color-gold-mid)]" />
        </div>

      </div>
    </section>
  );
};

export default Countdown;
