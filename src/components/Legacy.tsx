import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export default function Legacy() {
  return (
    <section className="w-full section-padding relative z-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-24 md:mb-32">
            <span className="text-neon-green font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Legend</span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">Generational <br className="hidden md:block" /> Impact.</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <FadeIn>
            <div className="group flex flex-col gap-8">
              <div className="aspect-[16/10] bg-dark-card rounded-2xl overflow-hidden relative border border-white/5 group-hover:border-neon-green/30 transition-all duration-500 shadow-2xl">
                <img
                  src="/CR7.png"
                  alt="Legend_01"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'; }}
                />
                <div className="absolute top-8 left-8">
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white group-hover:text-neon-green transition-colors">CR7</div>
                </div>
              </div>
              <div className="px-4">
                <h4 className="text-3xl font-black tracking-tighter text-white mb-4 leading-none uppercase group-hover:text-neon-green transition-colors">Global Presence.</h4>
                <p className="text-sm text-subtext font-medium leading-relaxed max-w-sm">
                  Worn by everyone from iconic athletes to engineering masters. The most democratic watch in existence.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group flex flex-col gap-8 lg:mt-24">
              <div className="aspect-[16/10] bg-dark-card rounded-2xl overflow-hidden relative border border-white/5 group-hover:border-neon-green/30 transition-all duration-500 shadow-2xl">
                <img
                  src="/PC.png"
                  alt="Legend_02"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1542491595-62e924f7cba7?q=80&w=1000&auto=format&fit=crop'; }}
                />
                <div className="absolute top-8 left-8">
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white group-hover:text-neon-green transition-colors">Priyanka Chopra</div>
                </div>
              </div>
              <div className="px-4">
                <h4 className="text-3xl font-black tracking-tighter text-white mb-4 leading-none uppercase group-hover:text-neon-green transition-colors">Engineering Core.</h4>
                <p className="text-sm text-subtext font-medium leading-relaxed max-w-sm">
                  Standard issue for those who demand precision. A reliable companion in every environment.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
