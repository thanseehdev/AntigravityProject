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
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-casio-blue/5 border border-casio-blue/10 rounded-full mb-12 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-casio-blue">The Timeless Icon</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-bold tracking-tighter text-casio-blue leading-[0.9] mb-12">
            Design <br className="hidden sm:block"/> <span className="text-zinc-300">Simplified.</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base max-w-sm sm:max-w-xl text-zinc-500 font-medium uppercase tracking-[0.2em] leading-relaxed mx-auto">
            From the streets of Tokyo to the world. <br className="hidden sm:block"/> The F-91W remains the absolute standard of precision.
          </p>
        </FadeIn>

        <div className="mt-16 flex flex-col sm:flex-row gap-6 pointer-events-auto items-center">
          <FadeIn delay={0.3}>
            <button className="px-12 py-5 bg-casio-blue text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-sm hover:bg-electric-blue transition-all shadow-xl shadow-casio-blue/20">
              Own the Legend
            </button>
          </FadeIn>
          <FadeIn delay={0.5}>
            <button className="flex items-center gap-3 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-casio-blue transition-colors">
              Our Heritage <div className="w-1.5 h-1.5 rounded-full bg-accent-gold"></div>
            </button>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
