import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}

export default App;
