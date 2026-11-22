import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const VEHICLE_ITEMS = [
  { href: '#catalog', label: 'Mayuri L5 EV Fleet', subtitle: 'Rattan Cargo & Closed Body' },
  { href: '#grevol-loader', label: 'Grevol Loader L5', subtitle: '750 kg L5N Cargo Loader' },
];

const NAV_ITEMS = [
  { href: '#comparison', label: 'Spec Comparison', type: 'default', isRoute: false },
  { href: '#services', label: 'Commercial EV Support', type: 'default', isRoute: false },
  { href: '#other-services', label: 'Advanced Solutions', type: 'emerald', isRoute: false },
  { href: '#calculator', label: 'ROI Calculator', type: 'default', isRoute: false },
  { href: '/online-services', label: 'Online Services', type: 'sky', isRoute: true },
];

const TRACKED_SECTIONS = [
  '#catalog',
  '#grevol-loader',
  ...NAV_ITEMS.filter((item) => !item.isRoute).map((item) => item.href),
];

const NAVBAR_OFFSET = 76;

export default function Navbar({ openEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);
  const [mobileVehiclesOpen, setMobileVehiclesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#catalog');

  const dropdownRef = useRef(null);
  const closeTimerRef = useRef(null);
  const scrollLockTimerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isVehicleSectionActive =
    activeLink === '#catalog' || activeLink === '#grevol-loader';

  const clearHoverTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleDesktopMouseEnter = () => {
    clearHoverTimer();
    setVehiclesOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    clearHoverTimer();
    closeTimerRef.current = setTimeout(() => {
      setVehiclesOpen(false);
    }, 120);
  };

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setVehiclesOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setVehiclesOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearHoverTimer();
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Reset mobile menu when viewport crosses to desktop (lg = 1024px)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleBreakpointChange = (e) => {
      if (e.matches) {
        setMobileMenuOpen(false);
      }
    };
    mediaQuery.addEventListener('change', handleBreakpointChange);
    return () => mediaQuery.removeEventListener('change', handleBreakpointChange);
  }, []);

  // Lock background scroll while mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // Track active route OR scroll section smoothly
  useEffect(() => {
    if (location.pathname === '/online-services') {
      setActiveLink('/online-services');
      setMobileMenuOpen(false);
      return;
    }

    let rafId = null;

    const handleIntersect = (entries) => {
      if (isProgrammaticScrollRef.current) return;

      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleEntries.length > 0) {
        setActiveLink(`#${visibleEntries[0].target.id}`);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: `-${NAVBAR_OFFSET + 8}px 0px -52% 0px`,
      threshold: [0.05, 0.25],
    });

    TRACKED_SECTIONS.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) observer.observe(element);
    });

    const handleScrollTop = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (isProgrammaticScrollRef.current) return;

        const firstSection = document.querySelector('#catalog');
        if (firstSection && window.scrollY < firstSection.offsetTop - NAVBAR_OFFSET - 80) {
          setActiveLink('');
        }
      });
    };

    window.addEventListener('scroll', handleScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (scrollLockTimerRef.current) {
        clearTimeout(scrollLockTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((href) => {
    isProgrammaticScrollRef.current = true;
    if (scrollLockTimerRef.current) {
      clearTimeout(scrollLockTimerRef.current);
    }

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const elementTop = targetElement.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementTop + window.scrollY - NAVBAR_OFFSET);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    scrollLockTimerRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 750);
  }, []);

  const handleSectionClick = useCallback(
    (e, href) => {
      e.preventDefault();
      clearHoverTimer();
      setActiveLink(href === '#top' ? '' : href);
      setMobileMenuOpen(false);
      setVehiclesOpen(false);

      if (location.pathname !== '/') {
        navigate('/');
        window.requestAnimationFrame(() => {
          setTimeout(() => scrollToSection(href), 80);
        });
      } else {
        scrollToSection(href);
      }
    },
    [location.pathname, navigate, scrollToSection]
  );

  const handleEnquiryClick = useCallback(() => {
    clearHoverTimer();
    setMobileMenuOpen(false);
    setVehiclesOpen(false);
    openEnquiry('General Enquiry / Online Services', 'Sky Tech Net Service Request');
  }, [openEnquiry]);

  const getDesktopLinkStyles = (type, isActive) => {
    if (type === 'emerald') {
      return `text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1.5 transition-colors ${
        isActive ? 'text-emerald-800' : ''
      }`;
    }
    if (type === 'sky') {
      return `text-sky-700 hover:text-sky-800 font-bold inline-flex items-center gap-1.5 transition-colors ${
        isActive ? 'text-sky-800' : ''
      }`;
    }
    return `hover:text-sky-600 transition-colors ${
      isActive ? 'text-sky-600' : 'text-slate-700'
    }`;
  };

  const getMobileLinkStyles = (type, isActive) => {
    if (type === 'emerald') {
      return `text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-2 transition-colors ${
        isActive ? 'text-emerald-300' : ''
      }`;
    }
    if (type === 'sky') {
      return `text-sky-400 hover:text-sky-300 font-bold flex items-center gap-2 transition-colors ${
        isActive ? 'text-sky-300' : ''
      }`;
    }
    return `flex items-center transition-colors ${
      isActive ? 'text-sky-400 font-bold' : 'text-slate-200 hover:text-sky-400 font-semibold'
    }`;
  };

  const getUnderlineColor = (type) => {
    if (type === 'emerald') return 'bg-emerald-600';
    return 'bg-sky-600';
  };

  const renderDesktopNavItem = (item) => {
    const isActive = activeLink === item.href;

    const innerContent = (
      <>
        {item.type === 'emerald' && (
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        )}
        {item.type === 'sky' && (
          <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
        )}

        <span>{item.label}</span>

        <span
          className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full transition-transform duration-300 ease-out origin-left ${getUnderlineColor(
            item.type
          )} ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
        />
      </>
    );

    if (item.isRoute) {
      return (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => {
            setActiveLink(item.href);
            setMobileMenuOpen(false);
            setVehiclesOpen(false);
          }}
          className={`relative py-1.5 whitespace-nowrap ${getDesktopLinkStyles(item.type, isActive)}`}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={(e) => handleSectionClick(e, item.href)}
        className={`relative py-1.5 whitespace-nowrap ${getDesktopLinkStyles(item.type, isActive)}`}
      >
        {innerContent}
      </a>
    );
  };

  const renderMobileNavItem = (item) => {
    const isActive = activeLink === item.href;

    const content = (
      <>
        {item.type === 'emerald' && (
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
        )}
        {item.type === 'sky' && (
          <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
        )}
        <span>{item.label}</span>
      </>
    );

    if (item.isRoute) {
      return (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => {
            setActiveLink(item.href);
            setMobileMenuOpen(false);
            setVehiclesOpen(false);
          }}
          className={`rounded-xl px-3 py-2.5 text-base ${getMobileLinkStyles(item.type, isActive)} ${
            isActive ? 'bg-slate-800/80' : 'hover:bg-slate-800/50'
          }`}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={(e) => handleSectionClick(e, item.href)}
        className={`rounded-xl px-3 py-2.5 text-base ${getMobileLinkStyles(item.type, isActive)} ${
          isActive ? 'bg-slate-800/80' : 'hover:bg-slate-800/50'
        }`}
      >
        {content}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-transparent border-b border-transparent shadow-none lg:bg-white/95 lg:backdrop-blur-md lg:border-slate-200/90 lg:shadow-sm lg:supports-[backdrop-filter]:bg-white/85 pointer-events-none lg:pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[72px] flex items-center justify-between gap-3 py-2.5">
        {/* Brand Logo */}
        <a
          href="#top"
          onClick={(e) => handleSectionClick(e, '#top')}
          aria-label="Sky Tech Net Solutions Home"
          className="pointer-events-auto relative z-50 shrink-0 flex items-center rounded-xl bg-slate-900/75 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-1.5 lg:p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <img
            src={logo}
            alt="Sky Tech Net Solutions logo"
            width={60}
            height={44}
            className="h-9 sm:h-10 lg:h-11 w-auto object-contain rounded-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-semibold"
        >
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDesktopMouseEnter}
            onMouseLeave={handleDesktopMouseLeave}
          >
            <button
              type="button"
              onClick={() => setVehiclesOpen((prev) => !prev)}
              aria-expanded={vehiclesOpen}
              aria-haspopup="menu"
              className={`relative py-1.5 inline-flex items-center gap-1 whitespace-nowrap hover:text-sky-600 transition-colors cursor-pointer ${
                isVehicleSectionActive ? 'text-sky-600' : 'text-slate-700'
              }`}
            >
              <span>Vehicles</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  vehiclesOpen ? 'rotate-180' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-sky-600 transition-transform duration-300 ease-out origin-left ${
                  isVehicleSectionActive ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>

            <div
              role="menu"
              className={`absolute left-0 top-full pt-1.5 w-64 z-50 transition-all duration-200 origin-top ${
                vehiclesOpen
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 scale-95 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2 space-y-1">
                {VEHICLE_ITEMS.map((vItem) => {
                  const isSubActive = activeLink === vItem.href;
                  return (
                    <a
                      key={vItem.href}
                      href={vItem.href}
                      role="menuitem"
                      onClick={(e) => handleSectionClick(e, vItem.href)}
                      className={`block rounded-xl px-3.5 py-2.5 transition-colors ${
                        isSubActive
                          ? 'bg-sky-50 text-sky-700'
                          : 'text-slate-800 hover:bg-slate-50 hover:text-sky-600'
                      }`}
                    >
                      <p className="text-sm font-bold">{vItem.label}</p>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        {vItem.subtitle}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {NAV_ITEMS.map((item) => renderDesktopNavItem(item))}
        </nav>

        {/* Desktop CTA + Small-Device Hamburger Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleEnquiryClick}
            className="hidden lg:inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 active:scale-[0.98] text-white text-sm font-bold px-4 lg:px-5 py-2.5 rounded-xl shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="pointer-events-auto relative z-50 lg:hidden p-2.5 rounded-xl bg-slate-900/75 backdrop-blur-md text-white hover:bg-slate-900 active:scale-95 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Featured Dark/Glass Mobile Drawer (No White Box) */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-250 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        />

        {/* Menu Panel */}
        <nav
          aria-label="Mobile Navigation"
          className={`relative z-10 mt-[72px] mx-4 rounded-2xl bg-slate-950/95 border border-slate-800/90 shadow-2xl max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain transition-transform duration-250 ease-out ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-2 scale-[0.98]'
          }`}
        >
          <div className="p-4 flex flex-col space-y-1.5">
            {/* Vehicles Accordion */}
            <div className="border-b border-slate-800/80 pb-2 mb-1">
              <button
                type="button"
                onClick={() => setMobileVehiclesOpen((prev) => !prev)}
                aria-expanded={mobileVehiclesOpen}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold cursor-pointer transition-colors ${
                  isVehicleSectionActive
                    ? 'text-sky-400 bg-slate-800/60'
                    : 'text-slate-200 hover:bg-slate-800/50 hover:text-sky-400'
                }`}
              >
                <span>Vehicles</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileVehiclesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                  mobileVehiclesOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-3 pl-3 border-l border-sky-500/40 space-y-1 py-1.5">
                    {VEHICLE_ITEMS.map((vItem) => (
                      <a
                        key={vItem.href}
                        href={vItem.href}
                        onClick={(e) => handleSectionClick(e, vItem.href)}
                        className={`block rounded-xl px-3 py-2 transition-colors ${
                          activeLink === vItem.href
                            ? 'bg-sky-500/15 text-sky-300 font-bold'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-sky-300 font-semibold'
                        }`}
                      >
                        <p className="text-sm">{vItem.label}</p>
                        <p className="text-xs text-slate-400 font-normal mt-0.5">
                          {vItem.subtitle}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {NAV_ITEMS.map((item) => renderMobileNavItem(item))}

            <div className="pt-3">
              <button
                type="button"
                onClick={handleEnquiryClick}
                className="w-full bg-sky-600 hover:bg-sky-500 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}