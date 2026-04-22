import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export default function Specs() {
  return (
    <section className="w-full section-padding relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn>
          <div className="text-center mb-24">
            <span className="text-neon-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Specifications</span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">Technical <br className="hidden md:block" /> Narrative.</h2>
          </div>
        </FadeIn>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 md:gap-y-12">
          {[
            { label: 'CALIBER_REF', value: '593-QUARTZ' },
            { label: 'MASS_SPEC', value: '21.0 GRAM' },
            { label: 'CELL_TYPE', value: '7-YR LITH' },
            { label: 'ACCURACY', value: '±30S/MO' },
            { label: 'CRYSTAL', value: 'RESIN_PX' },
            { label: 'ILLUM', value: 'GREEN_LED' },
          ].map((spec, i) => (
            <FadeIn key={i} delay={i * 0.05} className="flex justify-between items-end border-b border-white/10 pb-6 group hover:border-neon-green/50 transition-colors">
              <span className="text-subtext font-bold uppercase tracking-[0.3em] text-[9px] group-hover:text-neon-green transition-colors">{spec.label}</span>
              <span className="text-xl md:text-3xl font-black tracking-tighter text-white group-hover:text-neon-green transition-colors">{spec.value}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
