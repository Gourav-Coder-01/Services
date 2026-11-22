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

      // Clear all user input fields after successful submission
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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs transition-opacity duration-200 ${
        animatingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 transition-all duration-200 ease-out ${
          animatingOut
            ? 'opacity-0 scale-95 translate-y-2'
            : 'opacity-100 scale-100 translate-y-0 animate-modal-enter'
        }`}
      >
        <div className="bg-slate-900 text-white px-6 py-5 flex justify-between items-center">
          <div>
            <span className="text-[11px] font-extrabold uppercase text-sky-400">
              Sky Tech Net Solutions Desk
            </span>
            <h3 className="text-xl font-black">Service Enquiry &amp; Request Form</h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-page-enter">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Request Registered Successfully!
              </h4>
              <p className="text-sm text-slate-600">
                Your enquiry for <strong className="text-sky-600">{enquiryForm.model}</strong> has
                been logged and emailed to <strong>Skytechnets@gmail.com</strong>. Our support
                team will contact you shortly.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600">
                Need urgent assistance? Call us at{' '}
                <a href="tel:9555529034" className="font-bold underline">
                  9555529034
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" /> Send on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1">
                  Selected Service / Vehicle
                </label>
                <input
                  type="text"
                  value={enquiryForm.model}
                  readOnly
                  className="w-full rounded-xl border border-slate-300 bg-slate-100 px-3.5 py-2.5 text-sm font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Kumar"
                    value={enquiryForm.fullName || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, fullName: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 95555 29034"
                    value={enquiryForm.phone || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. amit@example.com"
                    value={enquiryForm.email || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi / NCR"
                    value={enquiryForm.city || ''}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, city: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-sm transition-all"
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
                  className="w-full rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none px-3.5 py-2.5 text-sm transition-all resize-none"
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
                  className="w-full bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-extrabold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}{' '}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> Or Enquire Directly on WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}