// import React, { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import rattanBlueImg from '../assets/images/3 wheeler/mayuri L5 rattan cargo/Blue/front.jpg';
import rattanRedImg from '../assets/images/3 wheeler/mayuri L5 rattan cargo/red/front.png';
import RevealOnScroll from './RevealOnScroll';

export default function Hero({ rattanColor, setRattanColor, openEnquiry }) {
  const [displayedColor, setDisplayedColor] = useState(rattanColor);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (rattanColor === displayedColor) return;

    setIsFading(true);
    const timeout = setTimeout(() => {
      setDisplayedColor(rattanColor);
      setIsFading(false);
    }, 180);

    return () => clearTimeout(timeout);
  }, [rattanColor, displayedColor]);

  const activeImg = displayedColor === 'red' ? rattanRedImg : rattanBlueImg;

  return (
    <section id="top" className="relative overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sky-400" /> One Stop For All Online Services &amp; EV Solutions
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Sky Tech Net{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-400">
                  Solutions
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={140}>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Your trusted partner for online documentation (DL, RC, Insurance, FASTag, PAN, Aadhaar) combined with authorized{' '}
                <strong className="text-white">Mayuri L5 Electric Cargo Vehicles</strong>.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/online-services"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2"
                >
                  Explore Online Services <ChevronRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => openEnquiry('Mayuri L5 Fleet / Dealership', 'Request Quote / Dealership')}
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-bold px-7 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  Mayuri EV Fleet Quote
                </button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={260}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">8 Services</p>
                  <p className="text-xs text-slate-400 font-medium">Online &amp; Doc Desk</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-sky-400">9555529034</p>
                  <p className="text-xs text-slate-400 font-medium">Instant Phone Support</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400">600 kg</p>
                  <p className="text-xs text-slate-400 font-medium">Mayuri EV Payload</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll delay={160} direction="right">
              <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-sky-400 bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-md">
                    Sky Tech Net Portal Preview
                  </span>
                  <span className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Fast • Reliable
                  </span>
                </div>

                {/* Full-vehicle fit frame with smooth fade/scale transition on color change */}
                <div className="relative aspect-[16/10] w-full bg-white/95 rounded-xl border border-slate-700/90 overflow-hidden shadow-inner flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={activeImg}
                    alt={`Mayuri L5 Rattan Cargo (${displayedColor})`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                    className={`w-full h-full object-contain object-center transition-all duration-300 will-change-transform ${
                      isFading
                        ? 'opacity-0 scale-95 translate-x-2'
                        : 'opacity-100 scale-100 translate-x-0'
                    }`}
                  />
                  <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/85 text-white backdrop-blur-xs shadow-xs transition-colors duration-200">
                      Front View • {displayedColor === 'red' ? 'Industrial Red' : 'Fleet Blue'}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950/90 text-emerald-300 backdrop-blur-xs shadow-xs">
                      L5 Electric Cargo
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">Mayuri L5 Rattan Cargo</p>
                    <p className="text-xs text-slate-400">Switch factory livery preview:</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setRattanColor('blue')}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        rattanColor === 'blue'
                          ? 'bg-sky-600/20 border-sky-400 text-white scale-[1.02]'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🔵 Blue
                    </button>
                    <button
                      onClick={() => setRattanColor('red')}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        rattanColor === 'red'
                          ? 'bg-red-600/20 border-red-400 text-white scale-[1.02]'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🔴 Red
                    </button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}