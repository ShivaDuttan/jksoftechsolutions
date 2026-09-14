import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Cpu, Terminal, Shield, Cloud, Database, Radio, Sparkles, Network } from 'lucide-react';

type NodeId = 'integration' | 'ai' | 'software' | 'hardware' | 'cloud' | 'database' | 'cybersecurity' | 'iot' | null;

const nodes = [
  { id: 'ai', label: 'AI', x: '50%', y: '15%', icon: Sparkles, desc: 'Intelligent automation, predictive algorithms & smart models.' },
  { id: 'software', label: 'SOFTWARE', x: '80%', y: '30%', icon: Terminal, desc: 'Web, mobile, enterprise platforms, custom APIs & microservices.' },
  { id: 'hardware', label: 'HARDWARE', x: '80%', y: '70%', icon: Cpu, desc: 'Microcontrollers, embedded systems, sensors & custom prototypes.' },
  { id: 'cloud', label: 'CLOUD', x: '50%', y: '85%', icon: Cloud, desc: 'Cloud-native infrastructure, automated pipelines & scalable hosting.' },
  { id: 'database', label: 'DATABASE', x: '20%', y: '70%', icon: Database, desc: 'High-performance databases, telemetry stores & real-time indexing.' },
  { id: 'cybersecurity', label: 'CYBERSECURITY', x: '10%', y: '50%', icon: Shield, desc: 'Threat defense, secure architecture, audits & data protection.' },
  { id: 'iot', label: 'IoT', x: '20%', y: '30%', icon: Radio, desc: 'Edge computing, device-to-cloud telemetry & remote monitoring.' },
];

export function EcosystemSection() {
  const [activeNode, setActiveNode] = useState<NodeId>(null);
  const [mobileActiveNode, setMobileActiveNode] = useState<string>('integration');

  const currentMobileNodeData = mobileActiveNode === 'integration' 
    ? {
        id: 'integration',
        label: 'SYSTEM INTEGRATION',
        icon: Network,
        desc: 'The central hub bridging digital software, physical hardware, cloud databases, AI intelligence, and cybersecurity into unified operations.'
      }
    : nodes.find(n => n.id === mobileActiveNode) || nodes[0];

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-navy relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-3"
          >
            CONNECTED ARCHITECTURE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            Technology Doesn't Work in Silos.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed px-2"
          >
            We connect software, hardware, data and intelligence into systems that work together seamlessly.
          </motion.p>
        </div>

        {/* Desktop Interactive Ecosystem (Screen width >= md) */}
        <div className="hidden md:block relative w-full max-w-3xl mx-auto h-[550px] lg:h-[600px] mt-10">
          
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((node) => {
              const isActive = activeNode === node.id || activeNode === 'integration';

              return (
                <g key={`line-${node.id}`}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={node.x}
                    y2={node.y}
                    stroke={isActive ? "#0B5ED7" : "rgba(255,255,255,0.1)"}
                    strokeWidth={isActive ? "2" : "1"}
                    className="transition-all duration-500"
                  />
                  {isActive && (
                    <circle r="3" fill="#0B5ED7">
                      <animateMotion 
                        dur="2s" 
                        repeatCount="indefinite" 
                        path={`M 50% 50% L ${node.x} ${node.y}`}
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central Node */}
          <div 
            className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500",
              "w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 flex items-center justify-center cursor-pointer",
              activeNode === 'integration' 
                ? "border-primary bg-primary/20 shadow-[0_0_30px_rgba(11,94,215,0.4)]" 
                : "border-primary/50 bg-navy hover:border-primary",
              activeNode && activeNode !== 'integration' ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(11,94,215,0.3)]" : ""
            )}
            onMouseEnter={() => setActiveNode('integration')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <span className={cn(
              "font-bold text-xs lg:text-sm tracking-widest transition-colors duration-300 text-center px-2",
              activeNode ? "text-white" : "text-slate-300"
            )}>
              INTEGRATION
            </span>
            {activeNode === 'integration' && (
              <div className="absolute inset-0 rounded-full animate-ping border border-primary opacity-50" />
            )}
          </div>

          {/* Surrounding Nodes */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id || activeNode === 'integration';
            const isFaded = activeNode && !isActive;

            return (
              <div
                key={node.id}
                className={cn(
                  "absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 cursor-pointer",
                  "px-4 py-2.5 rounded-xl border text-xs lg:text-sm font-bold tracking-wider select-none",
                  isActive 
                    ? "border-primary bg-primary/20 text-white shadow-[0_0_15px_rgba(11,94,215,0.3)] scale-110" 
                    : isFaded 
                      ? "border-white/10 bg-navy/50 text-slate-500 scale-95 opacity-50"
                      : "border-white/20 bg-navy text-slate-300 hover:border-white/40 hover:text-white"
                )}
                style={{ left: node.x, top: node.y }}
                onMouseEnter={() => setActiveNode(node.id as NodeId)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {node.label}
              </div>
            );
          })}

        </div>

        {/* Mobile Interactive Ecosystem (Screen width < md) */}
        <div className="block md:hidden mt-4">
          {/* Touch instructions */}
          <p className="text-center text-xs text-primary font-medium mb-5 tracking-wide flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Tap any node to view connected system details
          </p>

          {/* Central Hub Button */}
          <div className="flex justify-center mb-5">
            <button
              type="button"
              onClick={() => setMobileActiveNode('integration')}
              className={cn(
                "relative px-6 py-3.5 min-h-[48px] rounded-2xl border-2 flex items-center gap-2.5 transition-all duration-300 font-bold text-xs tracking-widest",
                mobileActiveNode === 'integration'
                  ? "border-primary bg-primary text-white shadow-[0_0_25px_rgba(11,94,215,0.5)] scale-105"
                  : "border-primary/50 bg-navy/90 text-slate-200"
              )}
            >
              <Network size={18} className={mobileActiveNode === 'integration' ? "text-white" : "text-primary"} />
              <span>CENTRAL INTEGRATION HUB</span>
              {mobileActiveNode === 'integration' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary border-2 border-navy animate-pulse" />
              )}
            </button>
          </div>

          {/* Interactive Node Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
            {nodes.map((node) => {
              const isSelected = mobileActiveNode === node.id;
              const Icon = node.icon;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setMobileActiveNode(node.id)}
                  className={cn(
                    "flex items-center gap-2.5 px-3.5 py-3 min-h-[48px] rounded-xl border text-left transition-all duration-200 active:scale-95",
                    isSelected
                      ? "border-primary bg-primary/25 text-white shadow-[0_0_15px_rgba(11,94,215,0.3)] ring-1 ring-primary"
                      : "border-white/15 bg-navy/70 text-slate-300 hover:border-white/30"
                  )}
                >
                  <div className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                    isSelected ? "bg-primary text-white" : "bg-white/10 text-slate-400"
                  )}>
                    <Icon size={15} />
                  </div>
                  <span className="text-xs font-bold tracking-wide truncate">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <motion.div 
            key={mobileActiveNode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 border border-primary/30 rounded-2xl p-4 sm:p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center border border-primary/30 shrink-0">
                <currentMobileNodeData.icon size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {currentMobileNodeData.label}
                </h4>
                <span className="text-[10px] text-primary uppercase font-bold tracking-widest">
                  Integrated Component
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mt-2 pl-1">
              {currentMobileNodeData.desc}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
