import { useState } from 'react';
import {
  Truck,
  BatteryCharging,
  Gauge,
  ShieldCheck,
  IndianRupee,
  Wrench,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Layers,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import GrevolFront from '../assets/images/Grevol/front.jpg';
import GrevolBack from '../assets/images/Grevol/back.jpg';

const GREVOL_OFFER_HIGHLIGHTS = [
  { label: 'Starting Booking / Offer', value: '₹21,000', sub: 'EV gaadi offer', icon: IndianRupee },
  { label: 'Weekly Easy EMI', value: '₹4,500', sub: 'Flexible weekly plan', icon: Truck },
  { label: 'Certified Range', value: '125+ km', sub: 'Per full charge', icon: Gauge },
  { label: 'Daily Earning Potential', value: '₹2,500 – ₹3,000', sub: 'Commercial logistics', icon: IndianRupee },
];

const GREVOL_INCLUDED_BENEFITS = [
  '4 saal battery warranty (4 Years or 1,20,000 km)',
  '3 years tak service and maintenance free',
  '3 years tak insurance free',
  '4 years fitness company karake degi',
  '3 years Road side assistance free',
  'No entry — koi bhi No entry nahi chalane par',
  'Finance Available • Exchange Available • Doorstep Delivery',
];

const GREVOL_SPEC_GROUPS = [
  {
    id: 'dimensions',
    title: 'Vehicle Dimensions & Weight',
    accent: 'text-sky-600',
    badgeBg: 'bg-sky-50 text-sky-700',
    rows: [
      { label: 'Wheelbase', value: '2440 mm' },
      { label: 'Ground Clearance', value: '250 mm' },
      { label: 'Turning Radius', value: '3.05 meters' },
      { label: 'Gross Vehicle Weight', value: '1350 Kg' },
    ],
  },
  {
    id: 'cargo',
    title: 'Cargo Body',
    accent: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    rows: [
      { label: 'Length', value: '2050 mm' },
      { label: 'Width', value: '1480 mm' },
      { label: 'Height', value: '1550 mm' },
      { label: 'Payload', value: '750 kg | 170 cu ft' },
    ],
  },
  {
    id: 'battery',
    title: 'Battery & Charging',
    accent: 'text-sky-600',
    badgeBg: 'bg-sky-50 text-sky-700',
    rows: [
      { label: 'Battery Capacity', value: '200 Ah, 51.2 V, Li-ion (LFP)' },
      { label: 'Fast Charging', value: '2 hrs @ 100 Amp Current' },
      { label: 'Standard Charging', value: '4 hrs @ 50 Amp Current' },
      { label: 'Certified Range', value: '125+ km' },
    ],
  },
  {
    id: 'drivetrain',
    title: 'Drivetrain & Performance',
    accent: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    rows: [
      { label: 'Motor Rating', value: '51.2 Volt (5 kW Rated / 10 kW Peak)' },
      { label: 'Rated Torque', value: '15 Nm @ 3500 rpm' },
      { label: 'Charger & Transmission', value: '50 Amp • Two-step differential' },
      { label: 'Max Speed & Gradeability', value: '43 kmph • 22%' },
    ],
  },
  {
    id: 'chassis',
    title: 'Tyres, Suspension, Brakes & Warranty',
    accent: 'text-sky-600',
    badgeBg: 'bg-sky-50 text-sky-700',
    rows: [
      { label: 'Wheel Size (Front/Rear)', value: "4.5-10'" },
      { label: 'Brake (Front/Rear)', value: 'Drum brake (Hydraulically actuated)' },
      { label: 'Regenerative Braking', value: 'YES' },
      { label: 'Suspension & Warranty', value: 'Front Helical Spring / Rear Rubber Damper • 4 Yrs / 1,20,000 km' },
    ],
  },
];

export default function GrevolLoaderSection({ openEnquiry }) {
  const [usageType, setUsageType] = useState('business');

  return (
    <section
      id="grevol-loader"
      className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-clip"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-emerald-600">
            L5N Electric Cargo Loader
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-1.5 sm:mt-2 tracking-tight leading-tight">
            GREVOL LOADER L5 (Grevol EVAUM)
          </h2>
          <p className="text-slate-600 mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg leading-relaxed">
            Namaste! High-payload enclosed electric cargo loader engineered for commercial fleet owners,
            parcel delivery, and daily business earnings with zero no-entry restrictions.
          </p>
        </div>
      </RevealOnScroll>

      <div className="space-y-8 sm:space-y-12">
        {/* Offer & Fleet Highlights Card */}
        <RevealOnScroll delay={80}>
          <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-12">
              {/* Left Key Metrics */}
              <div className="xl:col-span-7 p-4 sm:p-7 lg:p-10 flex flex-col justify-between border-b xl:border-b-0 xl:border-r border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-700/70 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-snug">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Limited Commercial Offer • L5N Category</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-3.5 sm:mt-4 leading-tight">
                    EV Vehicle Offer — Only ₹21,000
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                    Aap EV gaadi lene ke liye inquiry kar rahe hain? Get a heavy-duty{' '}
                    <strong className="text-white">750 kg / 170 cu ft</strong> enclosed electric cargo
                    loader with fast LFP charging, weekly EMI ease, and complete ownership peace of mind.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
                    {GREVOL_OFFER_HIGHLIGHTS.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-400">
                            <span className="truncate">{item.label}</span>
                            <IconComp className="w-4 h-4 text-sky-400 shrink-0" />
                          </div>
                          <p className="text-lg sm:text-xl lg:text-2xl font-black text-white mt-1.5 tracking-tight">
                            {item.value}
                          </p>
                          <p className="text-xs text-emerald-400 font-medium mt-0.5">{item.sub}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Usage Selector */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-300 leading-snug">
                      Aap apne use ke liye le rahe ho ya business ke liye?
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Select your purpose before opening the enquiry desk
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:flex items-center gap-2.5 w-full md:w-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => setUsageType('business')}
                      className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 active:scale-[0.98] cursor-pointer text-center whitespace-nowrap ${
                        usageType === 'business'
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      Business Use
                    </button>
                    <button
                      type="button"
                      onClick={() => setUsageType('personal')}
                      className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 active:scale-[0.98] cursor-pointer text-center whitespace-nowrap ${
                        usageType === 'personal'
                          ? 'bg-sky-400 text-slate-950 border-sky-300 shadow-sm'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      Self / Personal Use
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Included Benefits & Enquiry CTA */}
              <div className="xl:col-span-5 p-4 sm:p-7 lg:p-10 bg-slate-950/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 shrink-0" /> Included Ownership Benefits
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-white mt-1.5">
                    Warranty, Service &amp; Road Advantage
                  </h4>

                  <ul className="mt-4 sm:mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2.5 sm:gap-3">
                    {GREVOL_INCLUDED_BENEFITS.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Responsive Vehicle Front & Back Images */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mt-6">
                    <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border border-slate-800 overflow-hidden flex items-center justify-center group/front">
                      <img
                        src={GrevolFront}
                        alt="Grevol Loader L5 Front View"
                        loading="lazy"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                        className="max-w-full max-h-full w-auto h-auto object-contain object-center transition-transform duration-300 will-change-transform group-hover/front:scale-105"
                      />
                      <span className="pointer-events-none absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 px-2 py-0.5 rounded-md bg-slate-900/85 text-[10px] font-bold text-white">
                        Front View
                      </span>
                    </div>

                    <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border border-slate-800 overflow-hidden flex items-center justify-center group/back">
                      <img
                        src={GrevolBack}
                        alt="Grevol Loader L5 Rear View"
                        loading="lazy"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                        className="max-w-full max-h-full w-auto h-auto object-contain object-center transition-transform duration-300 will-change-transform group-hover/back:scale-105"
                      />
                      <span className="pointer-events-none absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 px-2 py-0.5 rounded-md bg-slate-900/85 text-[10px] font-bold text-white">
                        Rear View
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800 space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiry(
                        `GREVOL LOADER L5 (${usageType === 'business' ? 'Business Use' : 'Personal Use'})`,
                        'Grevol Loader L5 Enquiry / Offer'
                      )
                    }
                    className="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] text-slate-950 font-extrabold py-3.5 px-5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Enquire for Grevol Loader L5</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    *Certified range and specifications apply under standard test conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Technical Specifications Grid */}
        <RevealOnScroll delay={140}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg p-4 sm:p-7 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-600">
                  <Layers className="w-4 h-4 shrink-0" /> Technical Datasheet
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-1">
                  Grevol EVAUM — L5N Specifications
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 w-full sm:w-fit">
                <Wrench className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="leading-snug">Payload: 750 kg • Battery: 200 Ah, 51.2 V LFP</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-8">
              {GREVOL_SPEC_GROUPS.map((group) => (
                <div
                  key={group.id}
                  className="rounded-2xl bg-slate-50 border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between hover:border-sky-300 transition-colors duration-200"
                >
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wide ${group.badgeBg}`}
                    >
                      {group.title}
                    </span>
                    <dl className="mt-3.5 sm:mt-4 space-y-2.5 text-xs sm:text-sm">
                      {group.rows.map((row) => (
                        <div
                          key={row.label}
                          className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5 sm:gap-4 py-1.5 border-b border-slate-200/70 last:border-b-0"
                        >
                          <dt className="text-slate-500 font-medium shrink-0">{row.label}</dt>
                          <dd className="text-slate-900 font-bold sm:text-right wrap-break-word">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}

              {/* Quick Charging & Fleet Summary Tile */}
              <div className="rounded-2xl bg-linear-to-br from-sky-50 to-emerald-50 border border-sky-200/80 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-[11px] sm:text-xs font-extrabold uppercase shadow-2xs">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Fleet Advantage
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 mt-3.5 sm:mt-4">
                    Built for High Uptime &amp; Low Running Cost
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Fast charging in <strong>2 hrs @ 100 Amp</strong> (or standard{' '}
                    <strong>4 hrs @ 50 Amp</strong>) pairs with a{' '}
                    <strong>170 cu ft</strong> cargo container so your vehicle stays on route longer.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openEnquiry(
                      `GREVOL LOADER L5 (${usageType === 'business' ? 'Business Use' : 'Personal Use'})`,
                      'Request Full Grevol Spec & Quote'
                    )
                  }
                  className="mt-5 sm:mt-6 w-full bg-slate-900 hover:bg-sky-600 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer"
                >
                  Get Quote &amp; Delivery Info
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}