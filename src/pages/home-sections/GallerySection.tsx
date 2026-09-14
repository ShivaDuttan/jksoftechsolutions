import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '@/components/ui/PageHeader';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/1.jpeg',
    title: 'Tech Conference',
    category: 'Events',
    description: 'Sharing insights at a leading technology conference'
  },
  {
    id: 2,
    src: '/gallery/2.jpeg',
    title: 'Machine Learning Deep Dive',
    category: 'Workshops',
    description: 'Exploring machine learning applications in real-world scenarios'
  },
  {
    id: 3,
    src: '/gallery/3.jpeg',
    title: 'Student Workshop',
    category: 'Workshops',
    description: 'Interactive session exploring technology and innovation'
  },
  {
    id: 4,
    src: '/gallery/4.jpeg',
    title: 'Keynote Address',
    category: 'Events',
    description: 'Addressing the next generation of builders and innovators'
  },
  {
    id: 5,
    src: '/gallery/5.jpeg',
    title: 'Presentation about AI',
    category: 'Events',
    description: 'Discussing the future and capabilities of Artificial Intelligence'
  },
  {
    id: 6,
    src: '/gallery/6.jpeg',
    title: 'Speaking Engagement',
    category: 'Events',
    description: 'Founder Jaikrish KR delivering a presentation'
  }
];

const categories = ['All', 'Events', 'Workshops'];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Handle keyboard navigation for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleNext = () => {
    if (selectedImage === null) return;
    // We navigate based on the filtered list so the user only sees what they are currently filtering
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const currentActiveImage = galleryImages.find(img => img.id === selectedImage);

  return (
    <div>
      <PageHeader 
        title="Gallery" 
        subtitle="A glimpse into our journey, people, ideas and milestones."
      />

      <div className="py-12 sm:py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 sm:px-6 py-2 min-h-[44px] rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center",
                  activeCategory === category
                    ? "bg-primary text-white shadow-[0_4px_15px_rgba(11,94,215,0.3)]"
                    : "bg-[#F7FAFF] text-slate-600 hover:text-primary hover:bg-light-blue border border-border-light"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border-light"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover / Active Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                    <div className="transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-light-blue text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 block">
                        {image.category}
                      </span>
                      <h4 className="text-white text-base sm:text-lg font-bold leading-tight mb-1">
                        {image.title}
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                    
                    {/* Expand icon */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-16 sm:py-20 text-slate-500 text-sm">
              No images found for this category.
            </div>
          )}

        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && currentActiveImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-sm p-3 sm:p-6 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              type="button"
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-[110] min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button 
                  type="button"
                  className="absolute left-2 sm:left-6 md:left-8 z-[110] min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  type="button"
                  className="absolute right-2 sm:right-6 md:right-8 z-[110] min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Main Image Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden bg-black/70">
                <img 
                  src={currentActiveImage.src} 
                  alt={currentActiveImage.title}
                  className="max-w-full max-h-[60vh] sm:max-h-[72vh] object-contain"
                />
              </div>
              
              <div className="bg-white p-4 sm:p-6 border-t-4 border-primary">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-navy mb-1">{currentActiveImage.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600">{currentActiveImage.description}</p>
                  </div>
                  <span className="px-3.5 py-1 bg-light-blue text-primary text-xs sm:text-sm font-bold rounded-full whitespace-nowrap self-start sm:self-auto">
                    {currentActiveImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
