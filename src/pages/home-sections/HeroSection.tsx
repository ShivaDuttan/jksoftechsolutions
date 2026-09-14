import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative min-h-[auto] md:min-h-[90vh] flex items-center pt-8 sm:pt-16 md:pt-24 pb-14 sm:pb-20 overflow-hidden bg-white">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl w-full"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-[80px] font-extrabold text-navy leading-[1.08] mb-4 sm:mb-6 tracking-tight">
              <span className="block text-primary">CODING</span>
              <span className="block">THE NEXT ERA.</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800 leading-snug">
                Engineering Technology. Connecting Possibilities.
              </h2>
              <p className="text-base sm:text-lg font-medium text-slate-600">
                Software. Hardware. Integrated Solutions.
              </p>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-slate-600 text-base sm:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
              JK Softech Solutions develops innovative software, hardware, AI, cybersecurity and integrated technology solutions that turn ideas and real-world challenges into practical, reliable and scalable solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button id="hero-explore-services-btn" href="#services" size="lg" className="w-full sm:w-auto justify-center min-h-[48px]" withArrow>
                Explore Our Services
              </Button>
              <Button 
                id="hero-start-project-btn"
                href="#contact" 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto justify-center min-h-[48px] border-slate-300 hover:border-primary hover:text-primary hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                Start a Project
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Technology Ecosystem */}
          <div className="w-full mt-4 md:mt-0">
            {/* Desktop Visual */}
            <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block">
              <EcosystemVisual />
            </div>

            {/* Mobile Visual */}
            <div className="block md:hidden">
              <MobileEcosystemPipeline />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function MobileEcosystemPipeline() {
  const steps = [
    { label: 'IDEA', detail: 'Requirements & Architecture' },
    { label: 'SOFTWARE & HARDWARE', detail: 'Code & Embedded Engineering' },
    { label: 'INTEGRATION', detail: 'Unified Systems & Telemetry', highlight: true },
    { label: 'AI & CYBERSECURITY', detail: 'Intelligence & Protection' },
    { label: 'REAL-WORLD SOLUTION', detail: 'Production Deployment' },
  ];

  return (
    <div className="bg-[#F7FAFF] border border-border-light rounded-2xl p-5 shadow-sm relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-light/80">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          SYSTEM ARCHITECTURE PIPELINE
        </span>
        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">End-to-End</span>
      </div>

      <div className="relative pl-6 space-y-4">
        {/* Continuous Connection Line */}
        <div className="absolute left-2.5 top-2 bottom-3 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Node Dot */}
            <div 
              className={cn(
                "absolute -left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                step.highlight 
                  ? "border-primary bg-primary text-white shadow-[0_0_10px_rgba(11,94,215,0.4)]" 
                  : "border-primary/50 bg-white"
              )}
            >
              <div className={cn("w-1.5 h-1.5 rounded-full", step.highlight ? "bg-white" : "bg-primary")} />
            </div>

            {/* Content */}
            <div className={cn(
              "p-3 rounded-xl border transition-all duration-300",
              step.highlight 
                ? "bg-white border-primary/40 shadow-sm" 
                : "bg-white/80 border-border-light"
            )}>
              <div className="flex items-center justify-between">
                <h4 className={cn("text-xs font-bold tracking-wide", step.highlight ? "text-primary" : "text-navy")}>
                  {step.label}
                </h4>
                {step.highlight && (
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-light-blue text-primary px-2 py-0.5 rounded-full">
                    Core
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcosystemVisual() {
  const nodes = [
    { id: 'idea', label: 'IDEA', x: '10%', y: '50%', color: 'border-slate-300 text-slate-500' },
    { id: 'software', label: 'SOFTWARE', x: '35%', y: '25%', color: 'border-blue-300 text-blue-600 bg-blue-50' },
    { id: 'hardware', label: 'HARDWARE', x: '35%', y: '75%', color: 'border-blue-300 text-blue-600 bg-blue-50' },
    { id: 'integration', label: 'INTEGRATION', x: '60%', y: '50%', color: 'border-primary text-primary bg-primary/10 shadow-[0_0_20px_rgba(11,94,215,0.2)]' },
    { id: 'ai', label: 'AI / INTELLIGENCE', x: '80%', y: '25%', color: 'border-blue-400 text-blue-700 bg-blue-50' },
    { id: 'solution', label: 'REAL-WORLD SOLUTION', x: '90%', y: '75%', color: 'border-navy text-navy bg-slate-50 font-bold' },
  ];

  const lines = [
    { from: 'idea', to: 'software', delay: 1 },
    { from: 'idea', to: 'hardware', delay: 1.5 },
    { from: 'software', to: 'integration', delay: 2 },
    { from: 'hardware', to: 'integration', delay: 2.5 },
    { from: 'integration', to: 'ai', delay: 3 },
    { from: 'integration', to: 'solution', delay: 3.5 },
    { from: 'ai', to: 'solution', delay: 4 },
  ];

  return (
    <div className="absolute inset-0">
      {/* SVGs for connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9E6F5" />
            <stop offset="50%" stopColor="#0B5ED7" />
            <stop offset="100%" stopColor="#D9E6F5" />
          </linearGradient>
        </defs>
        {lines.map((line, i) => {
          const fromNode = nodes.find(n => n.id === line.from);
          const toNode = nodes.find(n => n.id === line.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={i}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: line.delay, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 px-4 py-2 text-xs font-bold tracking-wider ${node.color}`}
          style={{ left: node.x, top: node.y, zIndex: 10 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 60, 
            damping: 15,
            delay: 0.5 + (i * 0.4) 
          }}
          whileHover={{ scale: 1.05 }}
        >
          {node.label}
        </motion.div>
      ))}

      {/* Subtle pulses on lines */}
      {lines.map((line, i) => {
         const fromNode = nodes.find(n => n.id === line.from);
         const toNode = nodes.find(n => n.id === line.to);
         if (!fromNode || !toNode) return null;
         
         return (
          <motion.div
            key={`pulse-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{ zIndex: 5 }}
            initial={{ left: fromNode.x, top: fromNode.y, opacity: 0 }}
            animate={{ 
              left: [fromNode.x, toNode.x], 
              top: [fromNode.y, toNode.y],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              delay: line.delay + 1,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
         )
      })}
    </div>
  );
}
