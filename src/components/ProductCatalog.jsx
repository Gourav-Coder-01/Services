import { useEffect, useRef, useState } from 'react';
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
  const swapTimerRef = useRef(null);

  const handleSelectColor = (nextColor) => {
    if (nextColor === rattanColor) return;

    setRattanColor(nextColor);
    setIsSwapping(true);

    if (swapTimerRef.current) {
      clearTimeout(swapTimerRef.current);
    }

    swapTimerRef.current = setTimeout(() => {
      setDisplayedColor(nextColor);
      setIsSwapping(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (swapTimerRef.current) {
        clearTimeout(swapTimerRef.current);
      }
    };
  }, []);

  const selectedRattanVariant =
    PRODUCT_CATALOG.rattanCargo.variants.find((v) => v.id === rattanColor) ||
    PRODUCT_CATALOG.rattanCargo.variants[0];

  const activeVariant =
    PRODUCT_CATALOG.rattanCargo.variants.find((v) => v.id === displayedColor) ||
    PRODUCT_CATALOG.rattanCargo.variants[0];

  return (
    <section
      id="catalog"
      className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-clip"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-14">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-sky-600">
            Commercial EV Fleet Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-1.5 sm:mt-2 tracking-tight leading-tight">
            Mayuri L5 Electric Cargo Vehicles
          </h2>
          <p className="text-slate-600 mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg leading-relaxed">
            Purpose-built three-wheeler electric commercial vehicles engineered for Indian road conditions
            and operator profitability.
          </p>
        </div>
      </RevealOnScroll>

      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Card 1: Mayuri L5 Rattan Cargo */}
        <RevealOnScroll delay={80}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 bg-slate-100 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-slate-600 max-w-full">
                    <span className="w-2 h-2 rounded-full bg-sky-600 shrink-0" />
                    <span className="truncate">{selectedRattanVariant.folder}</span>
                  </div>
                </div>

                <div className="my-auto py-1 sm:py-2">
                  <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 shadow-inner overflow-hidden flex items-center justify-center group/img">
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

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Select Finish
                  </span>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    {PRODUCT_CATALOG.rattanCargo.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => handleSelectColor(v.id)}
                        className={`flex items-center justify-center sm:justify-start gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all duration-200 active:scale-[0.98] cursor-pointer ${
                          rattanColor === v.id
                            ? 'border-slate-900 bg-white text-slate-900 shadow-xs scale-[1.01]'
                            : 'border-transparent bg-slate-200 text-slate-600 hover:bg-slate-300/70'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shrink-0"
                          style={{ backgroundColor: v.hex }}
                        />
                        <span className="truncate">{v.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-w-0">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] sm:text-xs font-extrabold uppercase tracking-wide">
                    Open Tray Loader
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-2 leading-tight">
                    {PRODUCT_CATALOG.rattanCargo.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-600 mt-1 leading-snug">
                    {PRODUCT_CATALOG.rattanCargo.tagline}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                    {PRODUCT_CATALOG.rattanCargo.description}
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-5 sm:mt-6">
                    {PRODUCT_CATALOG.rattanCargo.specs.map((spec) => {
                      const IconComponent = spec.icon;
                      return (
                        <div
                          key={spec.label}
                          className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-200 transition-colors min-w-0"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-[11px] sm:text-xs font-semibold">
                            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 shrink-0" />
                            <span className="truncate">{spec.label}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-extrabold text-slate-900 mt-1 wrap-break-word">
                            {spec.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex">
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiry(
                        `Mayuri L5 Rattan Cargo (${rattanColor})`,
                        'Vehicle Purchase / Quote'
                      )
                    }
                    className="w-full bg-slate-900 hover:bg-sky-600 active:scale-[0.99] text-white text-sm font-bold py-3.5 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 2: Mayuri L5 Loader (Closed Body) */}
        <RevealOnScroll delay={140}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between order-2 lg:order-1 min-w-0">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-extrabold uppercase tracking-wide">
                    All-Weather Container Box
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-2 leading-tight">
                    {PRODUCT_CATALOG.closedBody.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-600 mt-1 leading-snug">
                    {PRODUCT_CATALOG.closedBody.tagline}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                    {PRODUCT_CATALOG.closedBody.description}
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-5 sm:mt-6">
                    {PRODUCT_CATALOG.closedBody.specs.map((spec) => {
                      const IconComponent = spec.icon;
                      return (
                        <div
                          key={spec.label}
                          className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-200 transition-colors min-w-0"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-[11px] sm:text-xs font-semibold">
                            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                            <span className="truncate">{spec.label}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-extrabold text-slate-900 mt-1 wrap-break-word">
                            {spec.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex">
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiry('Mayuri L5 Loader (Closed Body)', 'Vehicle Purchase / Quote')
                    }
                    className="w-full bg-slate-900 hover:bg-emerald-600 active:scale-[0.99] text-white text-sm font-bold py-3.5 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-100 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-l border-slate-200 order-1 lg:order-2 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-slate-600 max-w-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                    <span className="truncate">{PRODUCT_CATALOG.closedBody.folderTag}</span>
                  </div>
                </div>
                <div className="my-auto py-1 sm:py-2">
                  <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-white rounded-xl sm:rounded-2xl p-3 sm:p-7 border border-slate-200/90 shadow-inner overflow-hidden flex items-center justify-center group/closed">
                    <img
                      src={closedBodyImg}
                      alt="Mayuri L5 Loader Closed Body"
                      loading="lazy"
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