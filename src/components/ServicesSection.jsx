import React from 'react';
import {
  Truck,
  Store,
  Building2,
  BadgePercent,
  FileCheck2,
  Layers,
  LifeBuoy,
  CalendarCheck,
  Wrench,
  PlugZap,
  RefreshCw,
  Navigation,
  ArrowRight,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services (12)' },
  { id: 'fleet-sales', label: 'Fleet & Sales' },
  { id: 'after-sales', label: 'After-Sales & Maintenance' },
  { id: 'finance-charging', label: 'Finance & Charging' },
  { id: 'body-compliance', label: 'Body & Compliance' },
];

const COMMERCIAL_SERVICES = [
  {
    id: 'new-ev-sales',
    category: 'fleet-sales',
    categoryLabel: 'Fleet & Sales',
    title: 'New EV Vehicle Sales & Bulk Fleet Procurement',
    badge: 'Direct & B2B Sales',
    description:
      'Direct retail sales and institutional bulk procurement for Mayuri L5 Rattan Cargo and L5 Closed Body Loaders.',
    features: ['Priority factory dispatch', 'Special B2B volume discounts', 'On-site vehicle demonstration'],
    icon: Truck,
    specs: ['Direct Factory Dispatch', 'Volume Rebates 5%+'],
  },
  {
    id: 'dealership-network',
    category: 'fleet-sales',
    categoryLabel: 'Fleet & Sales',
    title: 'Authorized Dealership & Sub-Dealer Network',
    badge: 'Channel Partnership',
    description:
      'Expand your commercial EV business with authorized territory dealerships and showroom branding.',
    features: ['Exclusive district territories', 'Complete showroom layout kit', 'Co-branded marketing'],
    icon: Store,
    specs: ['Exclusive District Rights', 'Showroom Setup Kit'],
  },
  {
    id: 'fleet-leasing',
    category: 'fleet-sales',
    categoryLabel: 'Fleet & Sales',
    title: 'Commercial Fleet Leasing & Rental Solutions',
    badge: 'Zero Upfront Capex',
    description:
      'Flexible monthly and annual EV cargo leasing plans tailored for e-commerce fulfillment.',
    features: ['Dry & wet lease contracts', 'Guaranteed 97%+ fleet uptime', 'Standby replacement vehicles'],
    icon: Building2,
    specs: ['12–48 Month Tenure', '97% Uptime Guarantee'],
  },
  {
    id: 'ev-financing',
    category: 'finance-charging',
    categoryLabel: 'Finance & Charging',
    title: 'EV Financing, Loans & Govt. Subsidy Assistance',
    badge: 'Up to 90% Funding',
    description:
      'Low-downpayment commercial EV loans paired with end-to-end PM E-DRIVE and FAME subsidy assistance.',
    features: ['Fast 48-hour loan sanction', 'Complete subsidy portal filing', 'Low green-finance interest rates'],
    icon: BadgePercent,
    specs: ['48-Hr Loan Sanction', 'PM E-DRIVE Filing'],
  },
  {
    id: 'rto-compliance',
    category: 'body-compliance',
    categoryLabel: 'Body & Compliance',
    title: 'RTO Registration, Commercial Permits & Insurance',
    badge: '100% Paperless Desk',
    description:
      'Hassle-free commercial yellow-plate RTO registration and zero-depreciation commercial insurance policies.',
    features: ['Yellow-plate L5N registration', 'Zero road tax clearance', 'Comprehensive insurance cover'],
    icon: FileCheck2,
    specs: ['Yellow-Plate L5N Reg', 'HSRP & Fitness Cert'],
  },
  {
    id: 'custom-fabrication',
    category: 'body-compliance',
    categoryLabel: 'Body & Compliance',
    title: 'Custom Cargo Body Fabrication & Branding',
    badge: 'Application Specific',
    description:
      'Factory-engineered superstructures built on the rugged Mayuri L5 chassis along with full vinyl branding.',
    features: ['Insulated cold-chain/pharma boxes', 'Hydraulic garbage tippers', 'Full vehicle vinyl branding'],
    icon: Layers,
    specs: ['Insulated Pharma Boxes', 'Full Livery Wrap'],
  },
  {
    id: 'roadside-assistance',
    category: 'after-sales',
    categoryLabel: 'After-Sales & Maintenance',
    title: '24/7 Roadside Assistance (RSA) & Mobile Service Vans',
    badge: '4-Hr Rapid Response',
    description:
      'Round-the-clock emergency breakdown assistance and GPS-dispatched mobile service vans.',
    features: ['24/7 emergency helpline', 'Mobile service vans for doorstep repairs', 'Complimentary towing support'],
    icon: LifeBuoy,
    specs: ['24/7 Emergency Line', 'Mobile Service Vans'],
  },
  {
    id: 'amc-servicing',
    category: 'after-sales',
    categoryLabel: 'After-Sales & Maintenance',
    title: 'Annual Maintenance Contracts (AMC) & Servicing',
    badge: 'Predictable Opex',
    description:
      'Comprehensive preventive maintenance packages covering electrical diagnostics and battery health.',
    features: ['Silver, Gold & Platinum tiers', 'Computerized BMS & motor scans', 'Zero-wait priority bay access'],
    icon: CalendarCheck,
    specs: ['Silver/Gold/Platinum Tiers', 'Priority Bays'],
  },
  {
    id: 'spares-battery',
    category: 'after-sales',
    categoryLabel: 'After-Sales & Maintenance',
    title: 'Genuine Spare Parts & Battery Replacement Center',
    badge: '100% OEM Spares',
    description:
      'Ready stock of authentic Mayuri OEM spare parts, certified Lithium-ion batteries, and smart chargers.',
    features: ['100% genuine factory-tested spares', 'High-cycle LFP battery upgrades', 'Same-day counter dispatch'],
    icon: Wrench,
    specs: ['Authentic OEM Stock', 'LFP Battery Upgrades'],
  },
  {
    id: 'charging-infrastructure',
    category: 'finance-charging',
    categoryLabel: 'Finance & Charging',
    title: 'Charging Infrastructure & Depot Setup',
    badge: 'Turnkey Power',
    description:
      'Complete site survey, industrial AC charger installation, and multi-vehicle depot charging bays.',
    features: ['Wall-mounted & pedestal chargers', 'Multi-bay overnight depot layout', 'Rooftop solar integration'],
    icon: PlugZap,
    specs: ['15A/32A Smart Chargers', 'Solar-EV Integration'],
  },
  {
    id: 'vehicle-exchange',
    category: 'finance-charging',
    categoryLabel: 'Finance & Charging',
    title: 'Old Vehicle Exchange & Scrappage Buyback',
    badge: 'Instant Trade-In',
    description:
      'Upgrade your aging diesel, petrol, or CNG three-wheeler to a brand-new Mayuri L5 EV.',
    features: ['Free doorstep vehicle inspection', 'Instant trade-in invoice deduction', 'Authorized RVSF scrappage cert'],
    icon: RefreshCw,
    specs: ['Doorstep Inspection', 'Instant Trade-In'],
  },
  {
    id: 'driver-training-telematics',
    category: 'body-compliance',
    categoryLabel: 'Body & Compliance',
    title: 'Driver Training & GPS Telematics Integration',
    badge: 'Smart Fleet Control',
    description:
      'Hands-on eco-driving certification alongside real-time GPS tracking and geofencing.',
    features: ['Certified eco-driving training', 'Live GPS fleet dashboard', 'Remote engine/motor immobilizer'],
    icon: Navigation,
    specs: ['Eco-Driving Cert', 'Live GPS Dashboard'],
  },
];

export default function ServicesSection({
  activeCategory,
  setActiveCategory,
  openServiceModal,
  openEnquiry,
}) {
  const filtered =
    activeCategory === 'all'
      ? COMMERCIAL_SERVICES
      : COMMERCIAL_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
              End-to-End EV Lifecycle Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Complete Commercial EV Services &amp; Support
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Everything your business needs under one roof—from new L5 vehicle procurement and
              financing to RTO compliance and 24/7 RSA.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <div
        key={activeCategory}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-page-enter"
      >
        {filtered.map((service, index) => {
          const IconComp = service.icon;
          return (
            <RevealOnScroll key={service.id} delay={index * 60} className="flex">
              <div className="w-full bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[11px] font-bold">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.specs.map((sp) => (
                      <span
                        key={sp}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => openServiceModal(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() =>
                      openEnquiry(service.title, `Service Booking: ${service.title}`)
                    }
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    Book <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}