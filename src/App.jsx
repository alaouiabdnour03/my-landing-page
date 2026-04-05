import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Evaluation from './components/Evaluation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  return (
    <div className="min-h-screen bg-lamec-gray font-sans flex flex-col">
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
    </div>
  );
}

export default App;
