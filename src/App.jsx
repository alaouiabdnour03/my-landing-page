import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Evaluation from './components/Evaluation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Confirmation from './components/Confirmation';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Evaluation />
      <Contact />
      <Footer />

      {/* Tawk.io Live Chat Widget */}
      <TawkMessengerReact
        propertyId="69d138211678ab1c34d723b8"
        widgetId="1jlck6gkl"
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-lamec-gray font-sans flex flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
