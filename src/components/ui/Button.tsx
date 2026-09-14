import { ReactNode, ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  withArrow?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  asChild,
  href,
  withArrow,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_14px_0_rgba(11,94,215,0.39)] hover:shadow-[0_6px_20px_rgba(11,94,215,0.23)] hover:-translate-y-0.5",
    secondary: "bg-white text-navy border border-border-light hover:border-primary hover:text-primary shadow-sm hover:shadow hover:-translate-y-0.5",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-slate-600 hover:text-primary hover:bg-light-blue",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {withArrow && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith('#')) {
      const { onClick: originalOnClick, ...restProps } = props as any;
      return (
        <a 
          href={href} 
          className={classes}
          {...restProps}
          onClick={(e) => {
            if (originalOnClick) {
              originalOnClick(e);
            }
            const targetId = href.replace('#', '');
            const element = document.getElementById(targetId);
            if (element) {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('sectionchange', { detail: targetId }));
              if (targetId === 'home') {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              } else {
                const navElement = document.querySelector('header');
                const navHeight = navElement ? navElement.offsetHeight : 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = Math.max(0, elementPosition + window.scrollY - navHeight);
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
              window.history.pushState(null, '', href);
            }
          }}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
