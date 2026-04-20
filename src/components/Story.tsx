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

export default function Story() {
  return (
    <section className="w-full py-24 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col items-center relative z-20">
      <FadeIn>
        <div className="text-center md:max-w-4xl">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-12 block">The Philosophy</span>
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-casio-blue mb-16 leading-[1]">
             Utility <br className="hidden md:block"/> Elevated.
          </h2>
          <div className="w-16 h-px bg-zinc-200 mx-auto mb-16"></div>
          <p className="text-zinc-400 font-medium uppercase tracking-[0.2em] text-[10px] sm:text-[11px] max-w-sm mx-auto leading-relaxed">
            We believe that a design which serves its purpose perfectly is the highest form of art. The F-91W was born in Tokyo, designed for the world, and made to last forever.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
