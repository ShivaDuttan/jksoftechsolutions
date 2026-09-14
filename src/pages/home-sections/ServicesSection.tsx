import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const services = [
  {
    id: "01",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Custom software, web applications, mobile applications, desktop applications, backend systems, APIs, databases, automation, integration and maintenance.",
    capabilities: ["Backend Architecture", "Custom APIs", "Cloud Native Apps", "Automation Scripts"],
  },
  {
    id: "02",
    title: "WEB DEVELOPMENT",
    desc: "Business websites, corporate websites, web portals, admin dashboards, e-commerce platforms, management systems and custom web applications.",
    capabilities: ["Corporate Portals", "Admin Dashboards", "E-Commerce", "SaaS Frontends"],
  },
  {
    id: "03",
    title: "MOBILE APPLICATION DEVELOPMENT",
    desc: "Android, iOS and cross-platform applications with UI/UX, backend, API, authentication, database, cloud and notification integration.",
    capabilities: ["Native iOS/Android", "React Native", "Offline-first Apps", "Push Notifications"],
  },
  {
    id: "04",
    title: "AI & MACHINE LEARNING",
    desc: "AI applications, machine learning, computer vision, predictive systems, intelligent automation, data analysis and AI-powered platforms.",
    capabilities: ["Predictive Models", "Computer Vision", "NLP", "LLM Integration"],
  },
  {
    id: "05",
    title: "HARDWARE & EMBEDDED SYSTEMS",
    desc: "Embedded systems, microcontrollers, sensors, IoT devices, device prototyping, hardware interfaces, automation systems and smart devices.",
    capabilities: ["PCB Design", "Microcontrollers", "Sensor Integration", "Firmware"],
  },
  {
    id: "06",
    title: "IoT & CONNECTED SYSTEMS",
    desc: "Device-to-cloud communication, remote monitoring, smart automation, device management, real-time data collection and connected dashboards.",
    capabilities: ["MQTT Protocols", "Device Management", "Edge Computing", "Data Pipelines"],
  },
  {
    id: "07",
    title: "CYBERSECURITY",
    desc: "Application security, network security, security assessment, secure development, security monitoring, awareness and technical security consultation.",
    capabilities: ["Penetration Testing", "Audit", "Secure Architecture", "Compliance"],
  },
  {
    id: "08",
    title: "SOFTWARE & HARDWARE INTEGRATION",
    desc: "Software-hardware interfaces, IoT platforms, sensor monitoring, smart devices, automated systems, real-time dashboards and cloud-connected devices.",
    capabilities: ["Hardware APIs", "Real-time Telemetry", "Control Systems", "Digital Twins"],
  },
  {
    id: "09",
    title: "TECHNICAL SUPPORT & MAINTENANCE",
    desc: "Software and hardware troubleshooting, bug fixing, maintenance, performance optimization, upgrades, integration support and consultation.",
    capabilities: ["SLA Support", "Legacy Upgrades", "Performance Tuning", "Bug Fixes"],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section className="py-16 sm:py-24 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4"
          >
            OUR CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4 sm:mb-6 tracking-tight max-w-3xl leading-tight"
          >
            Technology Services Built for the Next Era.
          </motion.h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border-light overflow-hidden">
          {services.map((service) => {
            const isActive = activeId === service.id;
            return (
              <div 
                key={service.id} 
                className={cn(
                  "border-b border-border-light last:border-b-0",
                  isActive ? "bg-light-blue/30" : "hover:bg-slate-50 transition-colors"
                )}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 text-left focus:outline-none group min-h-[56px]"
                  onClick={() => setActiveId(isActive ? null : service.id)}
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-3 sm:gap-6 pr-2">
                    <span className={cn(
                      "text-base sm:text-xl md:text-2xl font-extrabold transition-colors duration-300 shrink-0",
                      isActive ? "text-primary" : "text-slate-300 group-hover:text-primary/60"
                    )}>
                      {service.id}
                    </span>
                    <span className={cn(
                      "text-sm sm:text-lg md:text-xl font-bold tracking-tight transition-colors duration-300",
                      isActive ? "text-primary" : "text-navy group-hover:text-primary"
                    )}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown 
                    size={20}
                    className={cn(
                      "transition-transform duration-300 text-slate-400 shrink-0 ml-2",
                      isActive ? "rotate-180 text-primary" : "group-hover:text-primary"
                    )} 
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="p-4 sm:p-6 md:p-8 pt-0 pl-4 sm:pl-[56px] md:pl-[104px]"
                      >
                        <p className="text-slate-600 text-sm sm:text-base mb-5 leading-relaxed max-w-3xl">
                          {service.desc}
                        </p>
                        
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-navy mb-2.5 uppercase tracking-wider">Capabilities</h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {service.capabilities.map((cap, i) => (
                              <span key={i} className="px-2.5 sm:px-3 py-1 bg-white border border-border-light rounded-md text-xs sm:text-sm text-slate-600 hover:border-primary/40 hover:bg-[#F7FAFF] transition-colors duration-300">
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
