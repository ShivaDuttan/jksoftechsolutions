import { PageHeader } from '@/components/ui/PageHeader';
import { Eye, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <div>
      <PageHeader 
        title="About JK Softech Solutions" 
        subtitle="We work at the intersection of software and hardware to transform ideas and real-world challenges into practical technology solutions."
      />
      <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-base sm:text-lg text-slate-600 space-y-5 sm:space-y-8 leading-relaxed">
        <p>
          JK Softech Solutions is a technology solutions company focused on software development, hardware development, system integration and technical support.
        </p>
        <p>
          Our capabilities span custom software, web and mobile applications, AI-powered systems, cybersecurity, embedded systems, IoT, hardware integration, automation and technical support.
        </p>
        <p>
          Whether you have an idea that needs to become a working product, an existing system that needs improvement, or a technical challenge that needs to be solved, JK Softech Solutions aims to provide the right technology approach for the problem.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 pt-8 sm:pt-12">
          <div className="bg-[#F7FAFF] p-6 sm:p-8 rounded-2xl border border-border-light group transition-colors duration-300 hover:border-primary/30">
            <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-lg bg-light-blue flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                <Eye size={20} strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">VISION</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              To build a technology ecosystem where innovative ideas can be transformed into reliable, intelligent and impactful solutions.
            </p>
          </div>
          <div className="bg-[#F7FAFF] p-6 sm:p-8 rounded-2xl border border-border-light group transition-colors duration-300 hover:border-primary/30">
            <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-lg bg-light-blue flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                <Target size={20} strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">MISSION</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              To deliver practical, innovative and reliable technology solutions by combining software, hardware and emerging technologies with customer-focused development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
