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
    <section className="w-full section-padding flex flex-col items-center relative z-20">
      <FadeIn>
        <div className="text-center md:max-w-4xl">
          <span className="text-neon-green font-bold tracking-[0.4em] uppercase text-[10px] mb-12 block">The Philosophy</span>
          <h2 className="text-4xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-16 leading-[0.9] uppercase">
            Utility <br className="hidden md:block" /> Elevated.
          </h2>
          <div className="w-20 h-1 bg-neon-green mx-auto mb-16 shadow-neon"></div>
          <p className="text-subtext font-medium uppercase tracking-[0.3em] text-[10px] sm:text-[12px] max-w-sm mx-auto leading-relaxed">
            We believe that a design which serves its purpose perfectly is the highest form of art. The F-91W was born in Tokyo, designed for the world, and made to last forever.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
