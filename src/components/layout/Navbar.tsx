import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, LayoutGrid, Image as ImageIcon, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initial load with hash in URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          if (hash === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const isMobile = window.innerWidth < 1024;
            const navHeight = isMobile ? 68 : 80;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
            const elementTop = element.getBoundingClientRect().top + scrollTop;
            window.scrollTo({
              top: Math.max(0, elementTop - navHeight),
              behavior: 'smooth'
            });
          }
          setActiveSection(hash);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleSectionChange = (e: CustomEvent<string>) => {
      if (e.detail) {
        setActiveSection(e.detail);
      }
    };
    window.addEventListener('sectionchange' as any, handleSectionChange);
    return () => window.removeEventListener('sectionchange' as any, handleSectionChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      setIsScrolled(scrollTop > 20);

      // If user recently clicked a nav link, avoid scroll-spy jumps during smooth scroll animation
      if (isProgrammaticScrollRef.current) {
        return;
      }

      // If at the very top of the page, always activate 'home'
      if (scrollTop < 80) {
        setActiveSection('home');
        return;
      }

      // If at or near the very bottom of the document, activate 'contact'
      const windowBottom = window.innerHeight + scrollTop;
      if (windowBottom >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
        return;
      }

      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      const navOffset = (window.innerWidth >= 1024 ? 80 : 68) + 40;
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navOffset && rect.bottom > navOffset) {
            current = section;
            break;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const wasMobileMenuOpen = mobileMenuOpen;
    setMobileMenuOpen(false);
    setActiveSection(id);
    isProgrammaticScrollRef.current = true;

    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    scrollTimerRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 1000);

    const performScroll = () => {
      if (id === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', '#home');
        window.dispatchEvent(new CustomEvent('sectionchange', { detail: 'home' }));
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        const isMobile = window.innerWidth < 1024;
        const navHeight = isMobile ? 68 : 80;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const targetPosition = Math.max(0, elementPosition + scrollTop - navHeight);

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        window.history.pushState(null, '', `#${id}`);
        window.dispatchEvent(new CustomEvent('sectionchange', { detail: id }));
      }
    };

    // If mobile menu was open, wait 80ms for the touch event and menu close to initiate cleanly
    if (wasMobileMenuOpen) {
      setTimeout(performScroll, 80);
    } else {
      performScroll();
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Services', id: 'services', icon: LayoutGrid },
    { name: 'Gallery', id: 'gallery', icon: ImageIcon },
    { name: 'About Us', id: 'about', icon: User },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border-light py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <a 
            href="#home" 
            onClick={(e) => scrollToSection('home', e)} 
            className="flex items-center space-x-3 group shrink-0 focus:outline-none"
            aria-label="JK Softech Solutions"
          >
            <img 
              src="/logo.jpeg" 
              alt="JK Softech Solutions" 
              className="h-10 sm:h-12 w-auto max-h-12 object-contain block shrink-0 transition-opacity duration-200 group-hover:opacity-90"
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-navy text-base sm:text-lg leading-tight tracking-tight">JK SOFTECH</span>
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase leading-none">Solutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(link.id, e)}
                  className="relative px-3 py-2 flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-primary transition-colors group"
                >
                  <link.icon size={16} className="transition-transform group-hover:scale-110" />
                  <span>{link.name}</span>
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <button 
              onClick={(e) => scrollToSection('contact', e as any)} 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-all px-4 py-2 h-9 bg-primary text-white shadow-sm hover:bg-primary-dark shadow-[0_4px_14px_rgba(11,94,215,0.25)] hover:shadow-[0_6px_20px_rgba(11,94,215,0.4)] hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            type="button"
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-navy hover:text-primary hover:bg-slate-100/80 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border-light shadow-xl overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className={cn(
                      "flex items-center gap-3.5 px-4 py-3 min-h-[48px] rounded-xl text-base font-semibold transition-all duration-200",
                      isActive 
                        ? "bg-light-blue text-primary shadow-sm" 
                        : "text-navy hover:bg-slate-50 hover:text-primary active:bg-slate-100"
                    )}
                  >
                    <link.icon size={20} className={isActive ? "text-primary" : "text-slate-500"} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
              <div className="pt-4 px-1">
                <button 
                  type="button"
                  onClick={(e) => scrollToSection('contact', e as any)}
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold transition-all px-6 py-3.5 min-h-[48px] bg-primary text-white shadow-[0_4px_14px_rgba(11,94,215,0.25)] hover:bg-primary-dark active:scale-[0.98]"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
