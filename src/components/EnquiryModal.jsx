import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';

const GSCRIPT_URL = import.meta.env.VITE_GSCRIPT_URL;
const WHATSAPP_NUMBER = '919555529034';

export default function EnquiryModal({
  isOpen,
  onClose,
  enquiryForm,
  setEnquiryForm,
  submitted,
  setSubmitted,
}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animatingOut, setAnimatingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimatingOut(false);
      setStatusMessage('');
      setIsError(false);
    } else if (shouldRender) {
      setAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimatingOut(false);
      }, 220);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Lock background page scroll & allow Escape key close
  useEffect(() => {
    if (!shouldRender) return;

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
  }, [shouldRender]);

  const handleClose = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const buildWhatsAppMessage = () =>
    encodeURIComponent(
      `Hello Sky Tech Net Solutions,\n\n*Enquiry For:* ${enquiryForm.model}\n*Type:* ${enquiryForm.enquiryType || 'General Enquiry'}\n*Name:* ${enquiryForm.fullName || 'Not provided'}\n*Phone:* ${enquiryForm.phone || 'Not provided'}\n*Email:* ${enquiryForm.email || 'Not provided'}\n*City:* ${enquiryForm.city || 'Delhi / NCR'}${enquiryForm.enquiry ? `\n*Enquiry:* ${enquiryForm.enquiry}` : ''}`
    );

  const handleWhatsAppDirect = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsError(false);
    setStatusMessage('Sending...');

    try {
      if (!GSCRIPT_URL) {
        throw new Error('VITE_GSCRIPT_URL is not configured.');
      }

      await fetch(GSCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          model: enquiryForm.model,
          enquiryType: enquiryForm.enquiryType || 'General Enquiry',
          fullName: enquiryForm.fullName,
          phone: enquiryForm.phone,
          email: enquiryForm.email || '',
          city: enquiryForm.city || 'Delhi / NCR',
          enquiry: enquiryForm.enquiry || '',
        }),
      });

      setEnquiryForm((prev) => ({
        ...prev,
        fullName: '',
        phone: '',
        email: '',
        city: '',
        enquiry: '',
      }));

      setStatusMessage('Success! Saved to Google Sheet and sent to mail.');
      setSubmitted(true);
    } catch (error) {
      setIsError(true);
      setStatusMessage(
        'Could not send automatically right now. You can still send your details directly on WhatsApp below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-xs transition-opacity duration-200 ${
        animatingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-full sm:max-w-lg max-h-[92dvh] sm:max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 transition-all duration-200 ease-out ${
          animatingOut
            ? 'opacity-0 translate-y-6 sm:scale-95 sm:translate-y-2'
            : 'opacity-100 translate-y-0 sm:scale-100 animate-modal-enter'
        }`}
      >
        {/* Mobile Drag Indicator */}
        <div className="bg-slate-900 pt-2.5 sm:hidden flex justify-center shrink-0">
          <span className="w-10 h-1 rounded-full bg-slate-700" />
        </div>

        {/* Sticky Modal Header */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-start sm:items-center gap-3 shrink-0">
          <div className="min-w-0">
            <span className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-sky-400">
              Sky Tech Net Solutions Desk
            </span>
            <h3
              id="enquiry-modal-title"
              className="text-lg sm:text-xl font-black leading-tight mt-0.5"
            >
              Service Enquiry &amp; Request Form
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="p-2 -mr-1 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1">
          {submitted ? (
            <div className="text-center py-4 sm:py-6 space-y-4 animate-page-enter">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                Request Registered Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Your enquiry for <strong className="text-sky-600">{enquiryForm.model}</strong> has
                been logged and emailed to <strong className="break-all">Skytechnets@gmail.com</strong>. Our support
                team will contact you shortly.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600">
                Need urgent assistance? Call us at{' '}
                <a href="tel:9555529034" className="font-bold underline text-slate-900">
                  9555529034
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1 pb-2 sm:pb-0">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" /> Send on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:flex-1 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 pb-2 sm:pb-0">
              <div>
                <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-slate-600 mb-1">
                  Selected Service / Vehicle
                </label>
                <input
                  type="text"
                  value={enquiryForm.model}
                  readOnly
                  className="w-full rounded-xl border border-slate-300 bg-slate-100 px-3.5 py-2.5 text-base sm:text-sm font-bold text-slate-900 truncate"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Amit Kumar"
                    value={enquiryForm.fullName || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, fullName: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-base sm:text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    autoComplete="tel"
                    placeholder="e.g. 95555 29034"
                    value={enquiryForm.phone || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-base sm:text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="e.g. amit@example.com"
                    value={enquiryForm.email || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-base sm:text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    autoComplete="address-level2"
                    placeholder="e.g. Delhi / NCR"
                    value={enquiryForm.city || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, city: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-base sm:text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Enquiry
                </label>
                <textarea
                  rows="2"
                  placeholder="Write your enquiry or specific requirement..."
                  value={enquiryForm.enquiry || ''}
                  onChange={(e) =>
                    setEnquiryForm({ ...enquiryForm, enquiry: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-base sm:text-sm transition-all resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`flex items-start gap-2 rounded-xl p-3 text-xs font-medium border ${
                    isError
                      ? 'bg-amber-50 border-amber-200 text-amber-800'
                      : 'bg-sky-50 border-sky-200 text-sky-800'
                  }`}
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="pt-1 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 active:scale-[0.99] disabled:opacity-60 text-white font-extrabold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}{' '}
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 active:scale-[0.99] text-emerald-700 border border-emerald-200 font-bold py-3 sm:py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Or Enquire Directly on WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}