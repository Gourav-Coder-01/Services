import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Building2, Phone, Mail } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <RevealOnScroll delay={0}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Sky Tech Net Solutions Logo"
                  className="w-11 h-11 rounded-xl object-contain bg-white/95 p-1 shadow-sm shrink-0"
                />
                <div>
                  <span className="text-xl font-black text-white">
                    SKY TECH NET SOLUTIONS
                  </span>
                  <p className="text-xs text-slate-400">
                    One Stop For All Online Services
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Fast, reliable, secure, and professional online documentation
                services and commercial EV cargo fleet solutions (Mayuri L5 &amp;
                Grevol Loader L5).
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 bg-sky-950 border border-sky-800 px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4" /> Professional Online &amp;
                Documentation Desk
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <div>
              <h4 className="text-sm font-extrabold uppercase text-white mb-4">
                Online &amp; Doc Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="hover:text-sky-400 transition-colors"
                  >
                    DL Services (Driving Licence)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="hover:text-sky-400 transition-colors"
                  >
                    RC Services (Registration)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Commercial Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="hover:text-sky-400 transition-colors"
                  >
                    FASTag Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-services"
                    onClick={handleRouteClick}
                    className="hover:text-sky-400 transition-colors"
                  >
                    PAN Card &amp; Aadhaar Support
                  </Link>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <div>
              <h4 className="text-sm font-extrabold uppercase text-white mb-4">
                EV &amp; Fleet Catalog
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#catalog"
                    onClick={(e) => handleSectionClick(e, '#catalog')}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Mayuri L5 Rattan Cargo
                  </a>
                </li>
                <li>
                  <a
                    href="#catalog"
                    onClick={(e) => handleSectionClick(e, '#catalog')}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Mayuri L5 Loader (Closed Body)
                  </a>
                </li>
                <li>
                  <a
                    href="#grevol-loader"
                    onClick={(e) => handleSectionClick(e, '#grevol-loader')}
                    className="hover:text-emerald-400 transition-colors font-semibold"
                  >
                    Grevol Loader L5 (750 kg EV)
                  </a>
                </li>
                <li>
                  <a
                    href="#other-services"
                    onClick={(e) => handleSectionClick(e, '#other-services')}
                    className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                  >
                    ✨ Advanced Solutions
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={240}>
            <div>
              <h4 className="text-sm font-extrabold uppercase text-white mb-4">
                Contact Sky Tech Net
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>Sky Tech Net Solutions, Delhi / NCR, India</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400" />
                  <a
                    href="tel:9555529034"
                    className="font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    9555529034
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <a
                    href="mailto:Skytechnets@gmail.com"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Skytechnets@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={300}>
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Sky Tech Net Solutions. All rights
              reserved.
            </p>
            <p>Fast • Reliable • Secure • Professional</p>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}