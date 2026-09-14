import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const steps = [
  { id: "01", title: "DISCOVER", desc: "Understand requirements, challenges, goals and expected outcomes." },
  { id: "02", title: "PLAN", desc: "Define technology architecture, development approach, resources and timeline." },
  { id: "03", title: "DESIGN", desc: "Design software, hardware, interfaces and overall system experience." },
  { id: "04", title: "DEVELOP", desc: "Develop and integrate the required components." },
  { id: "05", title: "TEST", desc: "Test functionality, performance, security, reliability and compatibility." },
  { id: "06", title: "DEPLOY", desc: "Deploy the solution and support transition into practical use." },
  { id: "07", title: "SUPPORT", desc: "Provide ongoing maintenance, troubleshooting, upgrades and technical support." }
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4"
          >
            HOW WE WORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            From Problem to Production.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Blue Line (Desktop & Mobile) */}
          <div className="absolute left-3 sm:left-5 md:left-8 top-1 bottom-3 w-0.5 bg-slate-800">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-0 pl-10 sm:pl-16 md:pl-24 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.15 + (idx * 0.1) }}
                className="relative md:pb-16 last:pb-0"
              >
                {/* Node indicator for both mobile and desktop */}
                <div className="flex absolute -left-[35px] sm:-left-[51px] md:-left-[76px] top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-navy border-2 border-slate-700 items-center justify-center z-10 transition-colors duration-300">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3 + (idx * 0.1), type: "spring" }}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-start group">
                  <div className="text-primary font-bold tracking-widest text-lg sm:text-xl mb-1.5 md:mb-0 md:w-32 md:shrink-0 group-hover:text-white transition-colors duration-300">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl group-hover:text-slate-300 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
