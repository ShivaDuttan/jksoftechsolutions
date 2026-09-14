import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-12 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">JK SOFTECH</h2>
              <p className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mt-1">Solutions</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building practical technology solutions for real-world challenges. Coding the Next Era.
            </p>
            <div className="flex space-x-4 pt-1">
              <a 
                href="https://www.instagram.com/jk_softech_solutions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1 min-h-[44px] min-w-[44px]" 
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(link.id);
                      if (el) {
                        if (link.id === 'home') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const navHeight = document.querySelector('header')?.offsetHeight || 80;
                          const pos = el.getBoundingClientRect().top + window.scrollY - navHeight;
                          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
                        }
                        window.history.pushState(null, '', `#${link.id}`);
                        window.dispatchEvent(new CustomEvent('sectionchange', { detail: link.id }));
                      }
                    }}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center group py-0.5 text-sm"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              {['Software Development', 'Hardware Development', 'AI & ML', 'IoT', 'Cybersecurity', 'Integration', 'Technical Support'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('services');
                      if (el) {
                        const navHeight = document.querySelector('header')?.offsetHeight || 80;
                        const pos = el.getBoundingClientRect().top + window.scrollY - navHeight;
                        window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
                        window.history.pushState(null, '', '#services');
                        window.dispatchEvent(new CustomEvent('sectionchange', { detail: 'services' }));
                      }
                    }}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center group py-0.5 text-sm"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3.5 sm:space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:admin.jksoftechsolutions@gmail.com" className="hover:text-primary transition-colors break-all">
                  admin.jksoftechsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+917904513473" className="hover:text-primary transition-colors">
                  +91 7904513473
                </a>
              </li>
              <li className="flex items-start space-x-3 leading-relaxed">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>No 30, Kamaraj Nagar, 7th Street, Kolathur, Chennai - 600099</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 text-center sm:text-left">
          <p>© {currentYear} JK Softech Solutions. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm text-slate-400">
            <span>Website Designed and Developed by</span>
            <a 
              href="https://www.linkedin.com/in/shivaduttan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-primary transition-colors group cursor-pointer min-h-[44px] py-1"
              title="Shiva Duttan LinkedIn Profile"
              aria-label="Website Designed and Developed by Shiva Duttan (LinkedIn profile opens in new tab)"
            >
              <span className="tracking-wide text-slate-200 group-hover:text-primary transition-colors">SHIVA DUTTAN</span>
              <span className="text-slate-500 group-hover:text-primary/70 transition-colors">·</span>
              <svg 
                className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
