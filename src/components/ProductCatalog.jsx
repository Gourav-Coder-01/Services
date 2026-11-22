// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import {
  Weight,
  Gauge,
  BatteryCharging,
  Zap,
  Package,
} from 'lucide-react';
import rattanBlueImg from '../assets/images/3 wheeler/mayuri L5 rattan cargo/Blue/side.png';
import rattanRedImg from '../assets/images/3 wheeler/mayuri L5 rattan cargo/red/side.jpg';
import closedBodyImg from '../assets/images/3 wheeler/mayuri_l5_loader_closeBody/mayuri-close.png';
import RevealOnScroll from './RevealOnScroll';

const PRODUCT_CATALOG = {
  rattanCargo: {
    id: 'rattan-cargo',
    folderRef: 'mayuri L5 rattan cargo (Blue & Red)',
    name: 'Mayuri L5 Rattan Cargo',
    tagline: 'High-Tensile Open Mesh Tray for Heavy Commercial & Wholesale Logistics',
    description:
      'Engineered with a robust reinforced rattan/mesh open tray and high-torque PMSM electric motor. Perfect for wholesale mandi goods, construction hardware, gas cylinders, and agricultural produce.',
    variants: [
      {
        id: 'blue',
        label: 'Electric Fleet Blue',
        hex: '#0284C7',
        folder: 'mayuri L5 rattan cargo/Blue',
        image: rattanBlueImg,
      },
      {
        id: 'red',
        label: 'Industrial Cargo Red',
        hex: '#DC2626',
        folder: 'mayuri L5 rattan cargo/red',
        image: rattanRedImg,
      },
    ],
    specs: [
      { label: 'Payload Capacity', value: '500 – 600 kg', icon: Weight },
      { label: 'Certified Range', value: '85 – 100 km / charge', icon: Gauge },
      { label: 'Battery Pack', value: 'Lithium-ion / Lead-Acid', icon: BatteryCharging },
      { label: 'Top Speed', value: '25 km/h (L5N Norms)', icon: Zap },
    ],
  },
  closedBody: {
    id: 'closed-body',
    folderTag: 'mayuri_l5_loader_closeBody',
    name: 'Mayuri L5 Loader (Closed Body)',
    tagline: 'Weatherproof Enclosed Steel Container Box for Secure Parcel Delivery',
    description:
      'Featuring a fully lockable, galvanized steel container box designed for e-commerce fulfillment, courier delivery, FMCG distribution, and pharma cold-chain transport.',
    specs: [
      { label: 'Payload Capacity', value: '500 – 550 kg', icon: Weight },
      { label: 'Certified Range', value: '90 – 110 km / charge', icon: Gauge },
      { label: 'Container Volume', value: '140 Cu. Ft. Weatherproof', icon: Package },
      { label: 'Charging Time', value: '3.5 – 4.5 Hours', icon: BatteryCharging },
    ],
  },
};

export default function ProductCatalog({
  rattanColor,
  setRattanColor,
  openEnquiry,
}) {
  const [displayedColor, setDisplayedColor] = useState(rattanColor);
  const [isSwapping, setIsSwapping] = useState(false);

  useEffect(() => {
    if (rattanColor === displayedColor) return;

    setIsSwapping(true);
    const timer = setTimeout(() => {
      setDisplayedColor(rattanColor);
      setIsSwapping(false);
    }, 180);

    return () => clearTimeout(timer);
  }, [rattanColor, displayedColor]);

  const selectedRattanVariant =
    PRODUCT_CATALOG.rattanCargo.variants.find((v) => v.id === rattanColor) ||
    PRODUCT_CATALOG.rattanCargo.variants[0];

  const activeVariant =
    PRODUCT_CATALOG.rattanCargo.variants.find((v) => v.id === displayedColor) ||
    PRODUCT_CATALOG.rattanCargo.variants[0];

  return (
    <section id="catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
            Commercial EV Fleet Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Mayuri L5 Electric Cargo Vehicles
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Purpose-built three-wheeler electric commercial vehicles engineered for Indian road conditions
            and operator profitability.
          </p>
        </div>
      </RevealOnScroll>

      <div className="space-y-16">
        <RevealOnScroll delay={80}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 bg-slate-100 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-sky-600" />
                    {selectedRattanVariant.folder}
                  </div>
                </div>

                <div className="my-auto py-2">
                  <div className="relative aspect-[16/10] w-full bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-inner overflow-hidden flex items-center justify-center group/img">
                    <img
                      src={activeVariant.image}
                      alt={`Mayuri L5 Rattan Cargo (${displayedColor})`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                      className={`w-full h-full object-contain object-center mix-blend-multiply drop-shadow-xl transition-all duration-500 will-change-transform group-hover/img:scale-[1.03] ${
                        isSwapping
                          ? 'opacity-0 scale-95 translate-x-3'
                          : 'opacity-100 scale-100 translate-x-0'
                      }`}
                    />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">Select Finish</span>
                  <div className="flex items-center gap-3">
                    {PRODUCT_CATALOG.rattanCargo.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setRattanColor(v.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all duration-200 cursor-pointer ${
                          rattanColor === v.id
                            ? 'border-slate-900 bg-white text-slate-900 shadow-xs scale-[1.02]'
                            : 'border-transparent bg-slate-200 text-slate-600 hover:bg-slate-300/70'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: v.hex }}
                        />{' '}
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-extrabold uppercase">
                    Open Tray Loader
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    {PRODUCT_CATALOG.rattanCargo.name}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600 mt-1">
                    {PRODUCT_CATALOG.rattanCargo.tagline}
                  </p>
                  <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                    {PRODUCT_CATALOG.rattanCargo.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {PRODUCT_CATALOG.rattanCargo.specs.map((spec) => {
                      const IconComponent = spec.icon;
                      return (
                        <div
                          key={spec.label}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-200 transition-colors"
                        >
                          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                            <IconComponent className="w-4 h-4 text-sky-600" /> {spec.label}
                          </div>
                          <p className="text-sm font-extrabold text-slate-900 mt-1">
                            {spec.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                  <button
                    onClick={() =>
                      openEnquiry(
                        `Mayuri L5 Rattan Cargo (${rattanColor})`,
                        'Vehicle Purchase / Quote'
                      )
                    }
                    className="flex-1 bg-slate-900 hover:bg-sky-600 text-white font-bold py-3.5 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={140}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase">
                    All-Weather Container Box
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    {PRODUCT_CATALOG.closedBody.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-600 mt-1">
                    {PRODUCT_CATALOG.closedBody.tagline}
                  </p>
                  <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                    {PRODUCT_CATALOG.closedBody.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {PRODUCT_CATALOG.closedBody.specs.map((spec) => {
                      const IconComponent = spec.icon;
                      return (
                        <div
                          key={spec.label}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-200 transition-colors"
                        >
                          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                            <IconComponent className="w-4 h-4 text-emerald-600" /> {spec.label}
                          </div>
                          <p className="text-sm font-extrabold text-slate-900 mt-1">
                            {spec.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                  <button
                    onClick={() =>
                      openEnquiry('Mayuri L5 Loader (Closed Body)', 'Vehicle Purchase / Quote')
                    }
                    className="flex-1 bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3.5 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-100 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-l border-slate-200 order-1 lg:order-2">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />{' '}
                    {PRODUCT_CATALOG.closedBody.folderTag}
                  </div>
                </div>
                <div className="my-auto py-2">
                  <div className="relative aspect-[16/10] w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-inner overflow-hidden flex items-center justify-center group/closed">
                    <img
                      src={closedBodyImg}
                      alt="Mayuri L5 Loader Closed Body"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                      className="max-w-full max-h-full w-auto h-auto object-contain object-center mix-blend-multiply drop-shadow-xl transition-transform duration-500 will-change-transform group-hover/closed:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}