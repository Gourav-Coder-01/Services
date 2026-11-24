import { useEffect, useRef, useState, useCallback } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ServiceModal({ service, onClose, openEnquiry }) {
  const [animatingOut, setAnimatingOut] = useState(false);
  const closeTimerRef = useRef(null);

  const handleClose = useCallback(() => {
    setAnimatingOut(true);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Lock background page scroll & allow Escape key dismissal
  useEffect(() => {
    if (!service) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, handleClose]);

  if (!service) return null;

  const ServiceIcon = service.icon;

  return (
    <div
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-xs transition-opacity duration-200 ${
        animatingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-full sm:max-w-xl max-h-[90dvh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 transition-all duration-200 ease-out ${
          animatingOut
            ? 'opacity-0 translate-y-6 sm:scale-95 sm:translate-y-2'
            : 'opacity-100 translate-y-0 sm:scale-100 animate-modal-enter'
        }`}
      >
        {/* Mobile Drag Handle */}
        <div className="bg-slate-900 pt-2.5 sm:hidden flex justify-center shrink-0">
          <span className="w-10 h-1 rounded-full bg-slate-700" />
        </div>

        {/* Sticky Modal Header */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-start sm:items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              {ServiceIcon && <ServiceIcon className="w-5 h-5" />}
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 leading-snug">
                {service.categoryLabel} — {service.badge}
              </span>
              <h3
                id="service-modal-title"
                className="text-base sm:text-lg font-black leading-snug mt-0.5 wrap-break-word"
              >
                {service.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close service modal"
            className="p-2 -mr-1 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto overscroll-contain flex-1">
          <div>
            <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
              Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
              Key Highlights
            </h4>
            <div className="space-y-2">
              {service.features?.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-slate-50 hover:bg-emerald-50/50 p-2.5 sm:p-3 rounded-xl border border-slate-200 hover:border-emerald-200 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            <div>
              <p className="text-xs font-bold text-emerald-800">Ready to activate?</p>
              <p className="text-xs text-emerald-700 mt-0.5">
                Call Sky Tech Net support at{' '}
                <a href="tel:9555529034" className="font-bold underline text-emerald-900">
                  9555529034
                </a>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const title = service.title;
                onClose();
                openEnquiry(title, `Service Booking: ${title}`);
              }}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-xs sm:text-sm font-bold px-4 py-3 sm:py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shrink-0 cursor-pointer text-center"
            >
              Proceed to Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}