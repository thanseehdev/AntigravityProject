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
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center lg:items-end relative z-20">
      <FadeIn>
        <div className="bg-white backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 text-center max-w-lg w-full border border-white shadow-2xl shadow-zinc-200/40 relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent"></div>

          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[9px] mb-6 block">Standard Issue</span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-casio-blue mb-10">Legendary Value.</h3>

          <div className="flex flex-col items-center gap-1 mb-12">
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-400 text-xl font-bold">$</span>
              <span className="text-6xl md:text-7xl font-bold tracking-tighter text-casio-blue">24</span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pl-1">USD</span>
            </div>
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-300">Reference Model v593.00</p>
          </div>

          <button className="group relative w-full overflow-hidden bg-casio-blue text-white font-bold uppercase tracking-[0.3em] text-[9px] py-6 rounded-xl hover:bg-electric-blue transition-all duration-500 shadow-xl shadow-casio-blue/10">
            Purchase Now
          </button>

          <div className="mt-10 flex justify-center gap-8 text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-accent-gold"></div> Global Ops</span>
            <span className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-accent-gold"></div> 2YR Support</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
