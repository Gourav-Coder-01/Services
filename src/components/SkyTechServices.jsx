// import React from 'react';
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

export default function SkyTechServices({ openEnquiry }) {
  return (
    <section
      id="sky-tech"
      className="py-20 bg-linear-to-br from-slate-900 via-sky-950 to-slate-950 text-white relative overflow-hidden"
    >
      {/* Subtle decorative radial glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll delay={0}>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900 border border-sky-700 text-sky-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" /> One Stop For All Online Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Sky Tech Net Solutions — Digital &amp; Documentation Desk
            </h2>
            <p className="text-sky-200 mt-2 text-lg font-semibold">
              DL • RC • Insurance • FASTag • PAN Card • Online Services • Ticket Booking • Aadhaar
              Services
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKY_TECH_SERVICES.map((st, index) => {
            const StIcon = st.icon;
            return (
              <RevealOnScroll key={st.id} delay={index * 70} className="flex">
                <div className="w-full bg-slate-800/95 border border-sky-800/60 rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-200">
                        <StIcon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-sky-950 text-sky-300 text-[11px] font-bold border border-sky-800">
                        {st.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white">{st.title}</h3>
                    <p className="text-slate-300 text-xs mt-2 leading-relaxed">{st.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {st.specs.map((sp) => (
                        <span
                          key={sp}
                          className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-[11px] font-semibold text-sky-300"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400">Instant Processing</span>
                    <button
                      onClick={() =>
                        openEnquiry(st.title, `Sky Tech Service Enquiry: ${st.title}`)
                      }
                      className="inline-flex items-center gap-1 bg-sky-600 hover:bg-sky-500 text-white text-xs font-extrabold py-2 px-3.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Enquire <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-sky-900/80">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Mayuri L5 EV Fleet
            </Link>
            <button
              onClick={() =>
                openEnquiry(
                  'Sky Tech Net — All Online & Documentation Services',
                  'Online Services Desk Enquiry'
                )
              }
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              Start Documentation Request <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}