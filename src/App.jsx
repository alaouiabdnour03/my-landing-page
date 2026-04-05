import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Evaluation from './components/Evaluation';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
