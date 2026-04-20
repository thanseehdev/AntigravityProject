import React, { useRef, useEffect } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import Specs from './components/Specs'
import Story from './components/Story'
import Legacy from './components/Legacy'
import Pricing from './components/Pricing'
import Video from './components/Video'

const frameCount = 240;

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const currentFrameRef = useRef(0);
  const { scrollYProgress } = useScroll();

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    currentFrameRef.current = index;
    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const hRatio = canvas.width / img.naturalWidth;
    const vRatio = canvas.height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
    const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;

    ctx.drawImage(
      img,
      0, 0, img.naturalWidth, img.naturalHeight,
      centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio
    );
  };

  useEffect(() => {
    const handleResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener('resize', handleResize);

    imagesRef.current = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const indexStr = String(i).padStart(3, '0');
      img.src = `/images/herosection/ezgif-frame-${indexStr}.png`;
      if (i === 1) {
        img.onload = () => drawFrame(0);
      }
      imagesRef.current.push(img);
    }

    if (imagesRef.current[0]?.complete) {
      drawFrame(0);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.floor(latest * (frameCount - 1))));
    drawFrame(frameIndex);
  });

  return (
    <div className="w-full relative font-sans bg-casio-bg text-premium-black selection:bg-casio-blue selection:text-white antialiased overflow-x-hidden">

      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-electric-blue/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent-gold/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Adaptive Canvas Container */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain lg:object-cover"
        />
      </div>

      <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-6 md:py-8 px-6 md:px-12 lg:px-24 bg-white/30 backdrop-blur-xl border-b border-white/20">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tighter text-casio-blue">CASIO</span>
          <div className="h-4 w-px bg-zinc-300 mx-2"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-accent-gold">F-91W Heritage</span>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-electric-blue transition-colors">Legend</a>
          <a href="#" className="hover:text-electric-blue transition-colors">Refinement</a>
          <a href="#" className="hover:text-electric-blue transition-colors">Acquisition</a>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <Features />
        <Specs />
        <Legacy />
        <Story />
        <Video />
        <Pricing />

        {/* Premium Minimalist Footer */}
        <footer className="w-full py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-100 bg-white relative z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
              <span className="text-xl font-bold tracking-tighter text-casio-blue uppercase">Casio</span>
              <div className="hidden md:block h-4 w-px bg-zinc-200"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">Precision Engineered Since 1989</span>
            </div>

            <div className="flex items-center gap-10 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              <a href="#" className="hover:text-casio-blue transition-colors">Archives</a>
              <a href="#" className="hover:text-casio-blue transition-colors">Legal</a>
              <a href="#" className="hover:text-casio-blue transition-colors">Privacy</a>
            </div>

            <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">
              <span>© 2024 TOKYO / REF_593</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
