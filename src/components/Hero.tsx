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

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-[200vh] z-10 lg:pointer-events-none">
      <div className="lg:sticky top-0 w-full h-screen flex flex-col items-center justify-center text-center px-6">

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-neon-green/5 border border-neon-green/10 rounded-full mb-12 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neon-green">The Timeless Icon</span>
          </div>

          <h1 className="text-6xl sm:text-8xl lg:text-[12rem] font-black tracking-tighter text-white leading-[0.8] mb-8 uppercase">
            CASIO <br className="hidden sm:block" /> <span className="text-neon-green italic">F-91W</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base max-w-sm sm:max-w-xl text-subtext font-medium uppercase tracking-[0.3em] leading-relaxed mx-auto">
            From the streets of Tokyo to the world. <br className="hidden sm:block" /> The absolute standard of precision and minimalism.
          </p>
        </FadeIn>

        <div className="mt-20 flex flex-col sm:flex-row gap-6 pointer-events-auto items-center">
          <FadeIn delay={0.3}>
            <button className="btn-neon">
              Get Yours Now
            </button>
          </FadeIn>
          <FadeIn delay={0.5}>
            <button className="flex items-center gap-3 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:text-neon-green transition-colors">
              Explore History <div className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-neon"></div>
            </button>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
