import { motion } from 'motion/react';
import { Settings, Layers, Link2, Lightbulb, ShieldCheck, Maximize } from 'lucide-react';

const reasons = [
  {
    title: "CUSTOMIZED SOLUTIONS",
    desc: "Built around specific requirements.",
    icon: Settings
  },
  {
    title: "END-TO-END DEVELOPMENT",
    desc: "From idea and design through development, testing, deployment and support.",
    icon: Layers
  },
  {
    title: "SOFTWARE + HARDWARE EXPERTISE",
    desc: "Bridge digital software and physical technology.",
    icon: Link2
  },
  {
    title: "INNOVATION DRIVEN",
    desc: "Explore emerging technologies to create smarter solutions.",
    icon: Lightbulb
  },
  {
    title: "RELIABLE SUPPORT",
    desc: "Continued maintenance and technical assistance after deployment.",
    icon: ShieldCheck
  },
  {
    title: "SCALABLE TECHNOLOGY",
    desc: "Design solutions with future expansion and improvements in mind.",
    icon: Maximize
  }
];

export function WhyUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      {/* Decorative blue line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-light-blue via-primary to-light-blue opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-3"
          >
            THE JK SOFTECH ADVANTAGE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            One Partner. Multiple Technologies. Complete Solutions.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="flex items-start space-x-3.5 sm:space-x-4 p-4 sm:p-6 rounded-xl hover:bg-[#F7FAFF] transition-all duration-300 border border-border-light/60 hover:border-primary/30 hover:shadow-sm group hover:-translate-y-1"
            >
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-light-blue flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <reason.icon size={18} />
              </div>
              <div className="transition-transform duration-300 group-hover:translate-x-0.5">
                <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
