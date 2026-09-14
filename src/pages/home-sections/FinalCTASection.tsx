import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Animated connection lines background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B5ED7" stopOpacity="0" />
              <stop offset="50%" stopColor="#0B5ED7" stopOpacity="1" />
              <stop offset="100%" stopColor="#0B5ED7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M -100 100 Q 300 300 700 100 T 1500 200" 
            fill="none" 
            stroke="url(#ctaGrad)" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 1500 400 Q 1100 200 700 500 T -100 400" 
            fill="none" 
            stroke="url(#ctaGrad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
        
        {/* Pulse elements */}
        <motion.div 
          className="absolute w-2 h-2 rounded-full bg-primary top-1/3 left-1/4"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 top-2/3 right-1/4"
          animate={{ scale: [1, 3, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-6"
        >
          Ready to Code the Next Era?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-slate-300 font-medium mb-6 sm:mb-8"
        >
          Have an idea, a technical challenge, or a technology requirement?
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-8 sm:mb-12 tracking-tight leading-tight"
        >
          Let's turn it into something real.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <Button href="#contact" size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 min-h-[48px] text-base sm:text-lg shadow-[0_0_40px_rgba(11,94,215,0.4)] justify-center" withArrow>
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
