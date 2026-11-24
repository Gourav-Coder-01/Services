import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkyTechServices from './components/SkyTechServices';
import ProductCatalog from './components/ProductCatalog';
import GrevolLoaderSection from './components/GrevolLoaderSection';
import ComparisonTable from './components/ComparisonTable';
import ServicesSection from './components/ServicesSection';
import OtherServices from './components/OtherServices';
import RoiCalculator from './components/RoiCalculator';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import EnquiryModal from './components/EnquiryModal';
import WhatsAppButton from './components/WhatsAppButton';

const SITE_URL = 'https://skytechnetsolutions.vercel.app/';

export default function App() {
  const location = useLocation();

  const [rattanColor, setRattanColor] = useState('blue');
  const [rattanMediaTab, setRattanMediaTab] = useState('photo');
  const [activeRattanClip, setActiveRattanClip] = useState(0);

  const [closedMediaTab, setClosedMediaTab] = useState('photo');
  const [activeClosedClip, setActiveClosedClip] = useState(0);

  const [activeServiceCategory, setActiveServiceCategory] = useState('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    city: 'Delhi / NCR',
    model: 'Mayuri L5 Rattan Cargo (Blue)',
    enquiryType: 'Vehicle Purchase / Quote',
    fleetSize: '1 - 5 Vehicles',
    notes: '',
  });

  const openEnquiry = (modelName, type = 'Vehicle Purchase / Quote') => {
    setEnquirySubmitted(false);
    setEnquiryForm((prev) => ({
      ...prev,
      model: modelName,
      enquiryType: type,
    }));
    setEnquiryModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setEnquiryModalOpen(false);
        setServiceModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh flex flex-col bg-slate-900 text-slate-900 font-sans antialiased overflow-x-clip selection:bg-sky-600 selection:text-white">
      <Navbar openEnquiry={openEnquiry} />

      <div
        key={location.pathname}
        className="flex-1 w-full min-w-0 bg-slate-50"
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <main className="w-full min-w-0">
                <title>SKY Tech Net Solutions | Mayuri L5 EV Fleet &amp; Online Services</title>
                <meta
                  name="description"
                  content="SKY Tech Net Solutions in Delhi / NCR offers commercial EV cargo vehicles (Mayuri L5 Rattan Cargo, Mayuri L5 Closed Body, Grevol Loader L5) and online documentation services."
                />
                <link rel="canonical" href={`${SITE_URL}/`} />

                <Hero openEnquiry={openEnquiry} />
                <ProductCatalog
                  rattanColor={rattanColor}
                  setRattanColor={setRattanColor}
                  rattanMediaTab={rattanMediaTab}
                  setRattanMediaTab={setRattanMediaTab}
                  activeRattanClip={activeRattanClip}
                  setActiveRattanClip={setActiveRattanClip}
                  closedMediaTab={closedMediaTab}
                  setClosedMediaTab={setClosedMediaTab}
                  activeClosedClip={activeClosedClip}
                  setActiveClosedClip={setActiveClosedClip}
                  openEnquiry={openEnquiry}
                />
                <GrevolLoaderSection openEnquiry={openEnquiry} />
                <ComparisonTable openEnquiry={openEnquiry} />
                <ServicesSection
                  activeCategory={activeServiceCategory}
                  setActiveCategory={setActiveServiceCategory}
                  openServiceModal={(srv) => {
                    setSelectedServiceForModal(srv);
                    setServiceModalOpen(true);
                  }}
                  openEnquiry={openEnquiry}
                />
                <OtherServices openEnquiry={openEnquiry} />
                <RoiCalculator openEnquiry={openEnquiry} />
              </main>
            }
          />

          <Route
            path="/online-services"
            element={
              <main className="min-h-[70dvh] py-4 sm:py-6 lg:py-8 w-full min-w-0 bg-slate-900">
                <title>
                  Online &amp; Documentation Services (DL, RC, Insurance, FASTag) | SKY Tech Net Solutions
                </title>
                <meta
                  name="description"
                  content="Get fast assistance for Driving Licence (DL), RC registration, commercial insurance, FASTag, PAN card, online forms, tickets, and Aadhaar services in Delhi / NCR."
                />
                <link rel="canonical" href={`${SITE_URL}/online-services`} />

                <SkyTechServices openEnquiry={openEnquiry} asPageHeading />
              </main>
            }
          />

          <Route
            path="*"
            element={
              <main className="min-h-[70dvh] flex items-center justify-center px-4 py-16">
                <meta name="robots" content="noindex, follow" />
                <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-sm space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-extrabold uppercase">
                    Page Not Found
                  </span>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    Return to Sky Tech Net Solutions
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The requested route could not be found. Head back to the main EV fleet &amp;
                    online services portal.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center w-full bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold py-3 px-5 rounded-xl transition-colors"
                  >
                    Go to Home
                  </Link>
                </div>
              </main>
            }
          />
        </Routes>
      </div>

      <Footer />
      <WhatsAppButton />

      {serviceModalOpen && selectedServiceForModal && (
        <ServiceModal
          key={selectedServiceForModal.id}
          service={selectedServiceForModal}
          onClose={() => setServiceModalOpen(false)}
          openEnquiry={openEnquiry}
        />
      )}

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        enquiryForm={enquiryForm}
        setEnquiryForm={setEnquiryForm}
        submitted={enquirySubmitted}
        setSubmitted={setEnquirySubmitted}
      />
    </div>
  );
}