import React, { useEffect, useRef, useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const COMPARISON_ROWS = [
  {
    feature: 'Cargo Body Configuration',
    rattan: 'Open High-Tensile Rattan / Mesh Tray',
    closed: 'Fully Enclosed Weatherproof Steel Container',
  },
  {
    feature: 'Rated Payload Capacity',
    rattan: '500 – 600 kg',
    closed: '500 – 550 kg',
  },
  {
    feature: 'Ideal Business Use Case',
    rattan: 'Wholesale Mandis, Hardware, Gas Cylinders, Agri-Goods',
    closed: 'E-Commerce, Courier, FMCG, Pharma & Parcel Delivery',
  },
  {
    feature: 'Typical Range per Charge',
    rattan: '85 – 100 km (Lithium-ion)',
    closed: '90 – 110 km (Lithium-ion)',
  },
  {
    feature: 'Battery Options',
    rattan: 'Lithium-ion (51.2V 105Ah) / Lead-Acid',
    closed: 'Lithium-ion (51.2V 105Ah / 150Ah)',
  },
  {
    feature: 'Fast Charging Time',
    rattan: '3.5 – 4 Hours (0–100%)',
    closed: '3.5 – 4.5 Hours (0–100%)',
  },
];

export default function ComparisonTable({ openEnquiry }) {
  const [tableVisible, setTableVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTableVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="comparison" className="py-14 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
              Side-by-Side Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-2 tracking-tight">
              Compare Mayuri L5 Cargo Models
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div
            ref={containerRef}
            className="bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* MOBILE VIEW: Stacked Feature Cards (< 768px) */}
            <div className="block md:hidden divide-y divide-slate-700">
              {/* Sticky Legend Header for Mobile */}
              <div className="grid grid-cols-2 gap-3 bg-slate-900 px-4 py-3.5 border-b border-slate-700 text-xs font-black uppercase tracking-wider">
                <div className="text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                  Rattan Cargo
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  Closed Body
                </div>
              </div>

              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={row.feature}
                  style={{ transitionDelay: `${idx * 70}ms` }}
                  className={`p-4 sm:p-5 transition-all duration-500 ease-out ${
                    idx % 2 === 0 ? 'bg-slate-800/40' : 'bg-slate-800'
                  } ${
                    tableVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-3'
                  }`}
                >
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                    {row.feature}
                  </h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-900/60 border border-slate-700/70 rounded-xl p-3">
                      <span className="block text-[11px] font-bold uppercase text-sky-400 mb-1">
                        Mayuri L5 Rattan Cargo
                      </span>
                      <p className="text-sm font-medium text-white leading-snug">
                        {row.rattan}
                      </p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-700/70 rounded-xl p-3">
                      <span className="block text-[11px] font-bold uppercase text-emerald-400 mb-1">
                        Mayuri L5 Closed Body
                      </span>
                      <p className="text-sm font-medium text-white leading-snug">
                        {row.closed}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TABLET & DESKTOP VIEW: Side-by-Side Table (>= 768px) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-900">
                    <th className="py-5 px-6 lg:px-8 text-xs lg:text-sm font-black uppercase tracking-wider text-slate-300 w-[28%]">
                      Parameter
                    </th>
                    <th className="py-5 px-6 lg:px-8 text-xs lg:text-sm font-black uppercase tracking-wider text-sky-400 w-[36%]">
                      Mayuri L5 Rattan Cargo
                    </th>
                    <th className="py-5 px-6 lg:px-8 text-xs lg:text-sm font-black uppercase tracking-wider text-emerald-400 w-[36%]">
                      Mayuri L5 Closed Body Loader
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700 text-sm">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={row.feature}
                      style={{ transitionDelay: `${idx * 80}ms` }}
                      className={`transition-all duration-500 ease-out hover:bg-slate-700/50 ${
                        idx % 2 === 0 ? 'bg-slate-800/40' : 'bg-slate-800'
                      } ${
                        tableVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-3'
                      }`}
                    >
                      <td className="py-4 px-6 lg:px-8 font-bold text-slate-300 align-top">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 lg:px-8 text-white font-medium align-top leading-relaxed">
                        {row.rattan}
                      </td>
                      <td className="py-4 px-6 lg:px-8 text-white font-medium align-top leading-relaxed">
                        {row.closed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Responsive Footer CTA */}
            <div className="bg-slate-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row gap-3.5 justify-between items-center text-center sm:text-left border-t border-slate-700">
              <p className="text-xs text-slate-400 leading-relaxed">
                All models comply with CMVR L5N commercial three-wheeler guidelines.
              </p>
              <button
                onClick={() =>
                  openEnquiry('Mayuri L5 Fleet / Both Models', 'Request Quote / Comparison')
                }
                className="w-full sm:w-auto shrink-0 bg-sky-500 hover:bg-sky-400 active:scale-[0.99] text-slate-950 font-extrabold px-5 py-3 sm:py-2.5 rounded-xl text-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}