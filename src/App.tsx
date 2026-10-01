import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));

export function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('Full Growth Audit');

  const handleOpenInquiry = (topic = 'Full Growth Audit') => {
    setInquiryTopic(topic);
    setIsInquiryOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Scroll restoration and hash anchor smooth handling */}
      <ScrollToTop />

      <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#E59C69] selection:text-black">
        {/* Fixed Hanging Pill Navigation */}
        <Navbar onOpenInquiry={() => handleOpenInquiry('General Inquiry')} />

        {/* Page Routes with Suspense code-splitting */}
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#E59C69] border-t-transparent animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenInquiry={handleOpenInquiry} />} />
            {/* Catch-all route gracefully renders HomePage */}
            <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          </Routes>
        </Suspense>

        {/* Site Footer */}
        <Footer onOpenInquiry={() => handleOpenInquiry('Audit My Business')} />

        {/* Interactive Business Audit / Inquiry Modal */}
        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          defaultTopic={inquiryTopic}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

