import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LaMecLanding } from './components/landing/LaMecLanding';
import Confirmation from './components/Confirmation';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function LandingPage() {
  return (
    <>
      <LaMecLanding />
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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
