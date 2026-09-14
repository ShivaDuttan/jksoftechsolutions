import React, { useState, useMemo, useRef, useEffect } from 'react';
import { getCountryCallingCode } from 'react-phone-number-input';
import { Search, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function CountrySelect({ value, onChange, options, iconComponent: Icon }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    return options.filter((option: any) => {
      if (!option.value) return false; // Skip 'International'
      const searchLower = searchTerm.toLowerCase();
      const labelMatch = option.label?.toLowerCase().includes(searchLower);
      
      let codeMatch = false;
      try {
        const code = getCountryCallingCode(option.value);
        codeMatch = `+${code}`.includes(searchLower) || code.includes(searchLower);
      } catch (e) {
        // Ignore error
      }
      
      return labelMatch || codeMatch;
    });
  }, [options, searchTerm]);

  const handleSelect = (countryValue: string) => {
    onChange(countryValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative flex items-center h-full pr-3 mr-3 border-r border-slate-200 shrink-0" ref={containerRef}>
      <button
        type="button"
        className="flex items-center gap-2 h-full py-1 focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-4 overflow-hidden rounded-[2px] shadow-sm shrink-0 bg-slate-200 flex items-center justify-center">
          {Icon && <Icon country={value} label={value} className="w-full h-full object-cover" />}
        </div>
        <ChevronDown 
          size={14} 
          className={cn(
            "text-slate-400 group-hover:text-primary transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-4 w-[300px] sm:w-[350px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-border-light z-50 overflow-hidden flex flex-col"
          >
            <div className="p-3 border-b border-border-light bg-slate-50 relative">
              <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                autoFocus
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-700 font-sans"
                placeholder="Search country or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <ul className="max-h-[280px] overflow-y-auto py-2 custom-scrollbar" role="listbox">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option: any) => {
                  let callingCode = '';
                  try {
                    if (option.value) {
                      callingCode = `+${getCountryCallingCode(option.value)}`;
                    }
                  } catch (e) {}

                  return (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={value === option.value}
                      className={cn(
                        "flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors hover:bg-light-blue group",
                        value === option.value && "bg-light-blue/50"
                      )}
                      onClick={() => handleSelect(option.value)}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-5 h-3.5 overflow-hidden rounded-[2px] shadow-sm shrink-0 bg-slate-200 flex items-center justify-center">
                          {Icon && <Icon country={option.value} label={option.label} className="w-full h-full object-cover" />}
                        </div>
                        <span className="text-sm text-navy truncate font-medium group-hover:text-primary transition-colors">
                          {option.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 pl-2">
                        <span className="text-sm font-semibold text-slate-500 group-hover:text-primary transition-colors">
                          {callingCode}
                        </span>
                        {value === option.value ? (
                          <Check size={16} className="text-primary" />
                        ) : (
                          <div className="w-4" /> 
                        )}
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="px-4 py-8 text-center text-sm text-slate-500">
                  No countries found.
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
