import React from 'react';
import {
  Sparkles,
  Package,
  BatteryCharging,
  Award,
  ShieldCheck,
  Truck,
  FileText,
  ArrowRight,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const OTHER_SPECIALIZED_SERVICES = [
  {
    id: 'cold-chain-logistics',
    title: 'Pharma & Perishable Cold-Chain Retrofitting',
    category: 'Specialized Transport',
    badge: 'Temperature Controlled',
    description:
      'Specialized insulated container fabrication equipped with active thermoelectric cooling modules.',
    icon: Package,
    specs: ['Temp: +2°C to +8°C', 'Auxiliary LFP Pack', 'Stainless Steel'],
  },
  {
    id: 'battery-swapping-network',
    title: 'Subscription Battery Swapping & EaaS',
    category: 'Energy Solutions',
    badge: 'Zero Downtime',
    description:
      'Instant 2-minute fully charged battery swap stations across urban commercial corridors.',
    icon: BatteryCharging,
    specs: ['2-Min Swapping', 'Pay-Per-Km Plan', 'Zero Degradation'],
  },
  {
    id: 'carbon-credit-audit',
    title: 'ESG Reporting & Carbon Credit Audit',
    category: 'Corporate Compliance',
    badge: 'Scope 1 & 2',
    description:
      'Comprehensive carbon emission offset calculations and verified carbon credit monetization.',
    icon: Award,
    specs: ['Automated CO2 Reports', 'Quarterly ESG Audit', 'Credit Monetization'],
  },
  {
    id: 'driver-welfare-insurance',
    title: 'Commercial Driver Health & Accident Cover',
    category: 'Driver Ecosystem',
    badge: 'Comprehensive Safety',
    description:
      'Group medical, accident insurance, and periodic wellness checkups for driver partners.',
    icon: ShieldCheck,
    specs: ['₹5 Lakh Cover', 'Cashless Hospitals', 'Wellness Camps'],
  },
  {
    id: 'heavy-metal-fabrication',
    title: 'Heavy Industrial Cylinder & Water Carrier',
    category: 'Industrial Utility',
    badge: 'Heavy-Duty Racks',
    description:
      'Reinforced industrial cage fabrication designed explicitly for commercial LPG cylinders and water jars.',
    icon: Truck,
    specs: ['LPG Cradles', 'Water Jar Racks', 'Load Approval'],
  },
  {
    id: 'cross-border-permits',
    title: 'Inter-State Commercial Transit Permit Desk',
    category: 'Regulatory Desk',
    badge: 'Fast-Track',
    description:
      'Single-window clearance for inter-state commercial cargo permits and corporate FASTag embedding.',
    icon: FileText,
    specs: ['Inter-State Permits', 'FASTag Corporate', 'Green Passes'],
  },
];

export default function OtherServices({ openEnquiry }) {
  return (
    <section
      id="other-services"
      className="py-12 sm:py-16 lg:py-20 bg-emerald-950 text-white relative overflow-x-clip"
    >
      {/* Subtle decorative radial glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900 border border-emerald-700 text-emerald-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 leading-snug">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Advanced Specialized Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Other Specialized Commercial Services
            </h2>
            <p className="text-emerald-100/80 mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg leading-relaxed">
              Advanced enterprise mobility modules including cold-chain transport, battery swapping,
              ESG carbon auditing, and driver welfare.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {OTHER_SPECIALIZED_SERVICES.map((srv, index) => {
            const SrvIcon = srv.icon;
            return (
              <RevealOnScroll key={srv.id} delay={index * 80} className="flex">
                <div className="w-full min-w-0 group bg-slate-900/95 border border-emerald-800/60 hover:border-emerald-500/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5 sm:mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-colors shrink-0">
                        <SrvIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-900 text-emerald-300 text-[10px] sm:text-[11px] font-bold tracking-wide">
                        {srv.badge}
                      </span>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/90 mb-1">
                      {srv.category}
                    </p>
                    <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {srv.specs.map((sp) => (
                        <span
                          key={sp}
                          className="px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-[11px] font-semibold text-emerald-300"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-emerald-900 flex flex-col xs:flex-row sm:flex-row items-stretch xs:items-center sm:items-center justify-between gap-2.5 sm:gap-3">
                    <span className="text-xs font-bold text-emerald-400">
                      Custom Enterprise Plan
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        openEnquiry(srv.title, `Specialized Service Enquiry: ${srv.title}`)
                      }
                      className="w-full xs:w-auto sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl transition-all cursor-pointer shrink-0"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}