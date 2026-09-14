import { motion } from 'motion/react';

export function FounderSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background element */}
      <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 sm:mb-16 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4"
          >
            LEADERSHIP
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            About the Founder
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Image (Desktop: side, Mobile: center) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-6 sm:mb-8 group aspect-square shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
              {/* Glow/shadow effect behind the image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-light-blue rounded-full rotate-45" />
              
              <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border-[5px] sm:border-[6px] border-white shadow-[0_0_30px_rgba(11,94,215,0.15)] shrink-0">
                <img 
                  src="/founder.jpeg" 
                  alt="Founder" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-1.5">
                Jaikrish KR
              </h4>
              <p className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-4">
                Cyber Defense Engineer &middot; Cybersecurity Mentor &middot; Builder
              </p>
            </div>
          </motion.div>

          {/* Right Column: Information, Mission, Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="prose prose-lg text-slate-600 mb-8 sm:mb-12 leading-relaxed">
              <p className="text-lg sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                Think. Code. Secure.
              </p>
              <p className="text-base sm:text-lg text-slate-700 mb-5 sm:mb-6 leading-relaxed">
                Turning curiosity into ideas, and ideas into real-world technology. Jaikrish KR explores the intersection of cybersecurity, AI, and innovation, with a focus on building, experimenting, and creating solutions that make technology more meaningful, practical, and secure.
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 bg-light-blue inline-block px-3.5 py-2 rounded-lg border border-border-light">
                15+ Workshops &middot; Real-World Projects &middot; Practical Impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-12">
              {/* Mission Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-[#F7FAFF] p-6 sm:p-8 rounded-2xl border border-border-light shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(11,94,215,0.12)] hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-light-blue rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150 opacity-30" />
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-all duration-300 group-hover:scale-105 shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    aria-hidden="true"
                  >
                    <path d="M12 2L4 5.5v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11v-6L12 2z" />
                    <path d="M12 16V9" />
                    <path d="M9.5 11.5L12 9l2.5 2.5" />
                  </svg>
                  <h5 className="text-lg sm:text-xl font-bold text-navy tracking-tight group-hover:text-primary transition-colors duration-300">
                    BUILDING WITH PURPOSE
                  </h5>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  <strong className="text-navy group-hover:text-navy transition-colors duration-300">Learn it. Build it. Secure it.</strong><br/>
                  Empower the next generation with practical cybersecurity skills and real-world technical knowledge.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-[#F7FAFF] p-6 sm:p-8 rounded-2xl border border-border-light shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(11,94,215,0.12)] hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-light-blue rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150 opacity-30" />
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-all duration-300 group-hover:scale-105 shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    aria-hidden="true"
                  >
                    <path d="M3 12h10" />
                    <path d="M9.5 8.5L13 12l-3.5 3.5" />
                    <path d="M19 7.5 Q19 12 23 12 Q19 12 19 16.5 Q19 12 15 12 Q19 12 19 7.5 Z" strokeWidth="1.8" />
                  </svg>
                  <h5 className="text-lg sm:text-xl font-bold text-navy tracking-tight group-hover:text-primary transition-colors duration-300">
                    BUILDING WHAT’S NEXT
                  </h5>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  <strong className="text-navy group-hover:text-navy transition-colors duration-300">Don’t just learn technology. Build it. Secure it. Innovate with it.</strong><br/>
                  Shape a generation of confident, security-minded innovators ready to build what’s next.
                </p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
