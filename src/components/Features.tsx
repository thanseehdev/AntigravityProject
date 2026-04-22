import React from 'react';
import { motion } from 'framer-motion';
import { Weight, Droplets, Zap, Timer, Shield } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Features() {
  return (
    <section className="w-full section-padding flex flex-col items-center relative z-20">
      <FadeIn>
        <div className="text-center mb-24 md:mb-32">
          <span className="text-neon-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Capabilities</span>
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase">Engineering <br className="hidden md:block" /> Perfection.</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
        {[
          { title: '7-Year Cell', detail: 'High-density lithium supply for unrivaled longevity.', icon: <Zap /> },
          { title: 'ISO 3.0 Seal', detail: 'Precision gasket seals for daily water resilience.', icon: <Droplets /> },
          { title: 'Resin Armor', detail: 'Impact-absorbing shell designed for extreme utility.', icon: <Shield /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col p-10 md:p-12 bg-dark-card rounded-xl border border-white/5 hover:border-neon-green/30 hover:shadow-neon transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center text-white mb-8 group-hover:bg-neon-green group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black tracking-tighter text-white mb-4 leading-none uppercase group-hover:text-neon-green transition-colors">{item.title}</h4>
              <p className="text-sm text-subtext font-medium leading-relaxed">{item.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
