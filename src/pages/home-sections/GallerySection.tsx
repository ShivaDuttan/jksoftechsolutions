import { motion } from 'motion/react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Clock, Image as ImageIcon, Sparkles } from 'lucide-react';

export function GallerySection() {
  return (
    <div>
      <PageHeader 
        title="Gallery" 
        subtitle="A glimpse into our journey, people, ideas and milestones."
      />

      <div className="py-20 sm:py-28 bg-[#F7FAFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#D9E6F5] p-8 sm:p-14 text-center shadow-sm relative overflow-hidden"
          >
            {/* Top decorative engineering accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#0B5ED7] to-transparent" />

            {/* Icon Container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-[#EAF3FF] border border-[#0B5ED7]/20 flex items-center justify-center text-[#0B5ED7] mb-6 shadow-sm">
              <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0B5ED7]" />
            </div>

            {/* Status Badge */}
            

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Gallery Coming Soon
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed mb-8">
              We are currently documenting our engineering milestones, workshops, and project showcases. High-resolution captures and event insights will be published here shortly.
            </p>

            {/* Subtle Technical Footer Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B5ED7] bg-[#F7FAFF] px-4 py-2 rounded-lg border border-[#D9E6F5]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stay tuned for updates</span>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
