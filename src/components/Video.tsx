import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Video() {
  return (
    <section className="w-full section-padding flex flex-col items-center relative z-20 bg-dark-bg">
      <FadeIn>
        <div className="text-center mb-16 md:mb-32">
          <span className="text-neon-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Optical Feed</span>
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white leading-none uppercase">Immersive <br className="hidden md:block" /> Utility.</h2>
        </div>
      </FadeIn>

      <div className="relative rounded-xl aspect-video w-full max-w-7xl overflow-hidden border border-white/5 shadow-2xl group flex items-center justify-center bg-dark-card">
        <img
          src="/hero_f91w.png"
          alt="Heritage Visual"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 brightness-75 group-hover:brightness-100"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 group-hover:text-neon-green transition-colors">Digital Sequence 01</span>
        </div>
      </div>
    </section>
  );
}
