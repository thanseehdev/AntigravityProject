import React from 'react';
import { motion } from 'framer-motion';

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

export default function Pricing() {
  return (
    <section className="w-full section-padding flex flex-col items-center lg:items-end relative z-20">
      <FadeIn>
        <div className="bg-dark-card backdrop-blur-xl rounded-2xl p-8 md:p-16 text-center max-w-lg w-full border border-white/5 shadow-2xl relative overflow-hidden group hover:border-neon-green/30 transition-all duration-500">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-neon-green/40 to-transparent"></div>

          <span className="text-neon-green font-bold tracking-[0.4em] uppercase text-[9px] mb-6 block">Standard Issue</span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-10 uppercase">Legendary Value.</h3>

          <div className="flex flex-col items-center gap-1 mb-12">
            <div className="flex items-baseline gap-2">
              <span className="text-neon-green text-xl font-bold">$</span>
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-white">24</span>
              <span className="text-[10px] font-bold text-subtext uppercase tracking-widest pl-1">USD</span>
            </div>
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Reference Model v593.00</p>
          </div>

          <button className="btn-neon w-full py-5 text-[10px]">
            Purchase Now
          </button>

          <div className="mt-10 flex justify-center gap-8 text-[8px] font-bold uppercase tracking-[0.3em] text-subtext">
            <span className="flex items-center gap-1.5 hover:text-neon-green transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-neon"></div> Global Ops</span>
            <span className="flex items-center gap-1.5 hover:text-neon-green transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-neon"></div> 2YR Support</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
