import React from 'react';
import { motion } from 'framer-motion';
import { Weight, Droplets, Zap, Timer, Shield } from 'lucide-react';
import { FadeIn } from './FadeIn';

export default function Features() {
  return (
    <section className="w-full py-24 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col items-center relative z-20">
      <FadeIn>
        <div className="text-center mb-24 md:mb-32">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Capabilities</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-zinc-300">Engineering <br className="hidden md:block" /> Perfection.</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
        {[
          { title: '7-Year Cell', detail: 'High-density lithium supply for unrivaled longevity.', icon: <Zap /> },
          { title: 'ISO 3.0 Seal', detail: 'Precision gasket seals for daily water resilience.', icon: <Droplets /> },
          { title: 'Resin Armor', detail: 'Impact-absorbing shell designed for extreme utility.', icon: <Shield /> },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col p-10 md:p-12 bg-white rounded-3xl border border-zinc-100 shadow-2xl shadow-zinc-200/50 hover:scale-[1.02] transition-all group">
              <div className="w-14 h-14 bg-casio-bg rounded-2xl flex items-center justify-center text-casio-blue mb-8 group-hover:bg-casio-blue group-hover:text-white transition-all shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-casio-blue mb-4 leading-none">{item.title}</h4>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
