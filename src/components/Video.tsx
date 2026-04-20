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
    <section className="w-full py-24 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col items-center relative z-20 bg-white shadow-[0_-50px_100px_rgba(245,245,245,0.5)]">
      <FadeIn>
        <div className="text-center mb-16 md:mb-32">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Optical Feed</span>
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-casio-blue leading-none">Immersive <br className="hidden md:block" /> Utility.</h2>
        </div>
      </FadeIn>

      <div className="relative rounded-sm aspect-video w-full max-w-7xl  overflow-hidden  shadow-2xl group flex items-center justify-center">
        <img
          src="/hero_f91w.png"
          alt="Heritage Visual"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
    </section>
  );
}
