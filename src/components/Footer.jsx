// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Building2, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import RevealOnScroll from './RevealOnScroll';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(hash), 120);
    } else {
      scrollToSection(hash);
    }
  };

  const handleRouteClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column (Spans full width on sm tablets so 2-col links sit balanced below) */}
          <RevealOnScroll delay={0} className="sm:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Sky Tech Net Solutions Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-contain bg-white/95 p-1 shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <span className="block text-base sm:text-lg lg:text-base xl:text-lg font-black text-white leading-tight tracking-tight">
                    SKY TECH NET SOLUTIONS
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    One Stop For All Online Services
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-md lg:max-w-none">
                Fast, reliable, secure, and professional online documentation
                services and commercial EV cargo fleet solutions (Mayuri L5 &amp;
                Grevol Loader L5).
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 bg-sky-950/90 border border-sky-800/80 px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Professional Online &amp; Documentation Desk</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Online & Doc Services */}
          <RevealOnScroll delay={80}>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-3.5 sm:mb-4">
                Online &amp; Doc Services
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm">
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    DL Services (Driving Licence)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    RC Services (Registration)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    Commercial Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    FASTag Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    PAN Card &amp; Aadhaar Support
                  </Link>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* EV & Fleet Catalog */}
          <RevealOnScroll delay={160}>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-3.5 sm:mb-4">
                EV &amp; Fleet Catalog
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm">
                <li>
                  <a
                    href="#catalog"
                    onClick={(e) => handleSectionClick(e, '#catalog')}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    Mayuri L5 Rattan Cargo
                  </a>
                </li>
                <li>
                  <a
                    href="#catalog"
                    onClick={(e) => handleSectionClick(e, '#catalog')}
                    className="inline-block py-1 hover:text-sky-400 transition-colors"
                  >
                    Mayuri L5 Loader (Closed Body)
                  </a>
                </li>
                <li>
                  <a
                    href="#grevol-loader"
                    onClick={(e) => handleSectionClick(e, '#grevol-loader')}
                    className="inline-block py-1 hover:text-emerald-400 transition-colors font-semibold"
                  >
                    Grevol Loader L5 (750 kg EV)
                  </a>
                </li>
                <li>
                  <a
                    href="#other-services"
                    onClick={(e) => handleSectionClick(e, '#other-services')}
                    className="inline-block py-1 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                  >
                    ✨ Advanced Solutions
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Contact & Location Map Column */}
          <RevealOnScroll delay={240} className="sm:col-span-2 lg:col-span-1">
            <div className="pt-4 sm:pt-0 border-t border-slate-800/70 sm:border-t-0">
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-3.5 sm:mb-4">
                Contact Sky Tech Net
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    Sky Tech Net Solutions, Delhi / NCR, India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <a
                    href="tel:9555529034"
                    className="font-bold text-white hover:text-sky-400 transition-colors py-0.5"
                  >
                    9555529034
                  </a>
                </li>
                <li className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a
                    href="mailto:Skytechnets@gmail.com"
                    className="hover:text-sky-400 transition-colors break-all py-0.5"
                  >
                    Skytechnets@gmail.com
                  </a>
                </li>
              </ul>

              {/* Embedded Google Map */}
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <div className="relative aspect-video w-full">
                  <iframe
                    title="Sky Tech Net Solutions Location Map — Delhi NCR"
                    src="https://www.google.com/maps?q=Delhi+NCR,+India&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="px-3 py-2 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-slate-300 truncate">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">Delhi / NCR</span>
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Delhi+NCR,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-semibold whitespace-nowrap"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Legal & Tagline Bar */}
        <RevealOnScroll delay={300}>
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Sky Tech Net Solutions. All rights
              reserved.
            </p>
            <p className="text-slate-400 sm:text-slate-500">
              Fast • Reliable • Secure • Professional
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}