'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/**
 * Two-vertical structure: Genomics (Radiogenomes AI) and Teleradiology both sit
 * under the ImagingInsight AI brand. `vertical: true` links get an active-state
 * highlight so visitors always know which vertical they are in.
 */
const NAV_LINKS = [
  { href: '/', label: 'Genomics', vertical: true },
  { href: '/teleradiology', label: 'Teleradiology', vertical: true },
  { href: '/team', label: 'Team', vertical: false },
  { href: '/#about', label: 'About', vertical: false },
  { href: '/contact', label: 'Contact', vertical: false },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isTele = pathname?.startsWith('/teleradiology') ?? false;

  /** Genomics is "active" on the home page only; Teleradiology on its subtree. */
  const isActive = (href: string) =>
    href === '/teleradiology' ? isTele : href === '/' ? pathname === '/' : false;

  /** Demo CTA should land on the form of whichever vertical you are viewing. */
  const ctaHref = isTele ? '/teleradiology#contact' : '/contact';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!open || e.key !== 'Tab' || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      // Close on Escape
      const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
      document.addEventListener('keydown', onEsc);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', onEsc);
      };
    }
  }, [open, handleKeyDown]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Icon-only crop of the logo — shows just the colorful AI/brain/DNA mark */}
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 bg-no-repeat transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: 'url(/brand/logo.png)',
              backgroundSize: '230% auto',
              backgroundPosition: '12% center',
              filter: 'drop-shadow(0 0 12px rgba(20,184,166,0.55))',
            }}
            aria-label="ImagingInsight AI"
          />
          <div className="leading-tight">
            <div className="font-display font-bold text-base sm:text-xl tracking-tight">
              <span className="logo-shimmer">Imaging</span>
              <span className="text-teal-700">Insight</span>{' '}
              <span className="ai-pulse">AI</span>
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-600 mt-0.5 hidden sm:block">
              {isTele ? 'Teleradiology Services' : 'Radiogenomes AI™ Platform'}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm transition-colors relative group ${
                  active ? 'text-teal-700 font-medium' : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-teal-400 transition-all ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={ctaHref} className="btn-primary text-sm py-2 px-5 hidden sm:inline-flex">
            Request Demo
          </a>
          <button
            className="lg:hidden text-navy-900 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div ref={menuRef} role="dialog" aria-label="Mobile navigation" className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="container-wide py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={active ? 'text-teal-700 font-medium' : 'text-slate-700 hover:text-teal-700'}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="btn-primary text-sm py-2 px-5 mt-2 sm:hidden"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
