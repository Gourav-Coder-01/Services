import { Link } from 'react-router-dom';
import {
  Sparkles,
  FileCheck2,
  Truck,
  ShieldCheck,
  Zap,
  FileText,
  Layers,
  Navigation,
  Award,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const SKY_TECH_SERVICES = [
  {
    id: 'dl-services',
    title: 'DL Services (Driving Licence)',
    badge: 'Licensing Desk',
    description:
      'New learning licence, permanent DL renewals, badge endorsements, and commercial permit authorizations.',
    icon: FileCheck2,
    specs: ['Learner Licence', 'Permanent DL', 'Commercial Badge'],
  },
  {
    id: 'rc-services',
    title: 'RC Services (Registration Certificate)',
    badge: 'Vehicle Records',
    description:
      'Vehicle ownership transfer, hypothecation addition/removal, fitness certification, and re-registration.',
    icon: Truck,
    specs: ['Ownership Transfer', 'Hypothecation', 'Fitness Cert'],
  },
  {
    id: 'insurance-services',
    title: 'Comprehensive Insurance',
    badge: 'Financial Security',
    description:
      'Commercial vehicle third-party and zero-depreciation comprehensive insurance policies with instant claim support.',
    icon: ShieldCheck,
    specs: ['Zero Dep Cover', 'Third-Party', 'Instant Renewals'],
  },
  {
    id: 'fastag-services',
    title: 'FASTag Solutions',
    badge: 'Toll Automation',
    description:
      'Corporate multi-vehicle FASTag wallet embedding, instant recharge, and highway toll management.',
    icon: Zap,
    specs: ['Corporate Wallet', 'Instant Recharge', 'Toll Management'],
  },
  {
    id: 'pan-card',
    title: 'PAN Card Services',
    badge: 'Tax Documentation',
    description:
      'New PAN card application, corrections, duplicate PAN issuance, and Aadhaar-PAN linking.',
    icon: FileText,
    specs: ['New PAN Application', 'Corrections', 'Aadhaar Link'],
  },
  {
    id: 'online-forms',
    title: 'Online Forms & Submissions',
    badge: 'Digital Portal',
    description:
      'Assisted filing for government tenders, commercial permits, municipal registrations, and digital certificates.',
    icon: Layers,
    specs: ['Govt Tenders', 'Permit Submissions', 'Digital Certificates'],
  },
  {
    id: 'ticket-booking',
    title: 'Ticket Booking Services',
    badge: 'Travel Desk',
    description:
      'Rail, bus, and flight bookings for business travel, courier dispatch personnel, and fleet operators.',
    icon: Navigation,
    specs: ['Train / IRCTC', 'Flight & Bus', 'Corporate Travel'],
  },
  {
    id: 'aadhaar-services',
    title: 'Aadhaar Documentation Services',
    badge: 'UIDAI Support',
    description:
      'Aadhaar update assistance, demographic verification, and document coordination for driver onboarding.',
    icon: Award,
    specs: ['Demographic Update', 'Driver Onboarding', 'Verification Desk'],
  },
];

export default function SkyTechServices({ openEnquiry, asPageHeading = false }) {
  const HeadingTag = asPageHeading ? 'h1' : 'h2';

  return (
    <section
      id="sky-tech"
      className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-slate-900 via-sky-950 to-slate-950 text-white relative overflow-x-clip"
    >
      {/* Subtle decorative radial glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll delay={0}>
          <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-900 border border-sky-700 text-sky-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 leading-snug">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
              <span>One Stop For All Online Services</span>
            </div>
            <HeadingTag className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Sky Tech Net Solutions — Digital &amp; Documentation Desk
            </HeadingTag>
            <p className="text-sky-200 mt-2 sm:mt-2.5 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">
              DL • RC • Insurance • FASTag • PAN Card • Online Services • Ticket Booking • Aadhaar
              Services
            </p>
          </div>
        </RevealOnScroll>

        {/* 1 col mobile -> 2 cols sm/md -> 4 cols xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-9 sm:mb-12">
          {SKY_TECH_SERVICES.map((st, index) => {
            const StIcon = st.icon;
            return (
              <RevealOnScroll key={st.id} delay={index * 60} className="flex">
                <div className="w-full min-w-0 bg-slate-800/95 border border-sky-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col justify-between hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5 sm:mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform duration-200 shrink-0">
                        <StIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-sky-950 text-sky-300 text-[10px] sm:text-[11px] font-bold border border-sky-800 tracking-wide">
                        {st.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {st.description}
                    </p>

                    <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
                      {st.specs.map((sp) => (
                        <span
                          key={sp}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-[11px] font-semibold text-sky-300"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-700 flex flex-col xs:flex-row sm:flex-row items-stretch xs:items-center sm:items-center justify-between gap-2.5">
                    <span className="text-xs font-bold text-sky-400">Instant Processing</span>
                    <button
                      type="button"
                      onClick={() =>
                        openEnquiry(st.title, `Sky Tech Service Enquiry: ${st.title}`)
                      }
                      className="w-full xs:w-auto sm:w-auto inline-flex items-center justify-center gap-1 bg-sky-600 hover:bg-sky-500 active:scale-[0.98] text-white text-xs font-extrabold py-2.5 px-3.5 rounded-xl transition-all cursor-pointer shrink-0"
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

        {/* Bottom Navigation & Primary Desk CTA */}
        <RevealOnScroll delay={160}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 sm:gap-4 pt-5 sm:pt-6 border-t border-sky-900/80">
            <Link
              to="/"
              className="inline-flex items-center justify-center sm:justify-start gap-2 py-2 text-xs sm:text-sm font-bold text-sky-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Back to Mayuri L5 EV Fleet</span>
            </Link>
            <button
              type="button"
              onClick={() =>
                openEnquiry(
                  'Sky Tech Net — All Online & Documentation Services',
                  'Online Services Desk Enquiry'
                )
              }
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 active:scale-[0.99] text-slate-950 text-xs sm:text-sm font-extrabold px-5 py-3 sm:py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Documentation Request</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}