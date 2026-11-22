import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

  // Smoothly scroll to top whenever the route path changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-600 selection:text-white">
      <Navbar openEnquiry={openEnquiry} />

      {/* key={location.pathname} replays the smooth fade-in animation on every page switch */}
      <div key={location.pathname} className="animate-page-enter">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <>
                <Hero
                  rattanColor={rattanColor}
                  setRattanColor={setRattanColor}
                  openEnquiry={openEnquiry}
                />
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
              </>
            }
          />

          <Route
            path="/online-services"
            element={
              <main className="min-h-[70vh] py-8">
                <SkyTechServices openEnquiry={openEnquiry} />
              </main>
            }
          />
        </Routes>
      </div>

      <Footer />
      <WhatsAppButton />

      {serviceModalOpen && selectedServiceForModal && (
        <ServiceModal
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