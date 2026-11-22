import React, { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ServiceModal({ service, onClose, openEnquiry }) {
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    setAnimatingOut(false);
  }, [service]);

  const handleClose = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  if (!service) return null;

  const ServiceIcon = service.icon;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs transition-opacity duration-200 ${
        animatingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 transition-all duration-200 ease-out ${
          animatingOut
            ? 'opacity-0 scale-95 translate-y-2'
            : 'opacity-100 scale-100 translate-y-0 animate-modal-enter'
        }`}
      >
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              {ServiceIcon && <ServiceIcon className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase text-emerald-400">
                {service.categoryLabel} — {service.badge}
              </span>
              <h3 className="text-lg font-black">{service.title}</h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close service modal"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-xs font-black uppercase text-slate-400 mb-1">Overview</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{service.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase text-slate-400 mb-2">Key Highlights</h4>
            <div className="space-y-2">
              {service.features?.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 text-sm text-slate-800 bg-slate-50 hover:bg-emerald-50/50 p-2.5 rounded-xl border border-slate-200 hover:border-emerald-200 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div>
              <p className="text-xs font-bold text-emerald-800">Ready to activate?</p>
              <p className="text-xs text-emerald-600">
                Call Sky Tech Net support at{' '}
                <a href="tel:9555529034" className="font-bold underline">
                  9555529034
                </a>
                .
              </p>
            </div>
            <button
              onClick={() => {
                const title = service.title;
                onClose();
                openEnquiry(title, `Service Booking: ${title}`);
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shrink-0 cursor-pointer"
            >
              Proceed to Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}