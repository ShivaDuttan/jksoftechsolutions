import { motion } from 'motion/react';
import { Terminal, Cpu, Network, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    num: "01",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Custom applications, platforms, APIs, databases, automation and AI-powered software.",
    icon: Terminal
  },
  {
    num: "02",
    title: "HARDWARE DEVELOPMENT",
    desc: "IoT devices, embedded systems, sensors, microcontrollers, prototypes and smart devices.",
    icon: Cpu
  },
  {
    num: "03",
    title: "SOFTWARE + HARDWARE INTEGRATION",
    desc: "Connect devices, applications, sensors, databases, cloud systems and real-time dashboards.",
    icon: Network
  },
  {
    num: "04",
    title: "TECHNICAL SUPPORT",
    desc: "Troubleshooting, maintenance, upgrades, integration assistance and technical consultation.",
    icon: PenTool
  }
];

export function WhatWeDoSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 sm:mb-16 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4"
          >
            WHAT WE DO
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            Technology Built Around Your Needs.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From software applications and digital platforms to hardware devices and connected systems, JK Softech Solutions provides end-to-end technology solutions designed around your requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl p-6 sm:p-8 border border-border-light hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(11,94,215,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-light-blue rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[1.8] opacity-50" />
              
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-200 group-hover:text-primary/20 transition-colors duration-500">
                  {service.num}
                </span>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-light-blue text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  <service.icon size={22} className="group-hover:animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
