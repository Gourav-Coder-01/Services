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
  const tableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTableVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (tableRef.current) observer.observe(tableRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="comparison" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
              Side-by-Side Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 tracking-tight">
              Compare Mayuri L5 Cargo Models
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div
            ref={tableRef}
            className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-900">
                    <th className="py-5 px-6 text-sm font-black uppercase text-slate-300 w-1/3">
                      Parameter
                    </th>
                    <th className="py-5 px-6 text-sm font-black uppercase text-sky-400 w-1/3">
                      Mayuri L5 Rattan Cargo
                    </th>
                    <th className="py-5 px-6 text-sm font-black uppercase text-emerald-400 w-1/3">
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
                      <td className="py-4 px-6 font-bold text-slate-300">{row.feature}</td>
                      <td className="py-4 px-6 text-white font-medium">{row.rattan}</td>
                      <td className="py-4 px-6 text-white font-medium">{row.closed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-between items-center border-t border-slate-700">
              <p className="text-xs text-slate-400">
                All models comply with CMVR L5N commercial three-wheeler guidelines.
              </p>
              <button
                onClick={() =>
                  openEnquiry('Mayuri L5 Fleet / Both Models', 'Request Quote / Comparison')
                }
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
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