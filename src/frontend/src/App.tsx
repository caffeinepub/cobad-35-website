import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LocationMap from './components/LocationMap';
import EnrollmentForm from './components/EnrollmentForm';
import QuestionsForm from './components/QuestionsForm';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <LocationMap />
      <EnrollmentForm />
      <QuestionsForm />
      <ContactButtons />
      <Footer />
    </div>
  );
}

export default App;
