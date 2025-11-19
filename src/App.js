import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Features from './components/Features';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectsPage from './pages/ProjectsPage';

const HomePage = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Domains />
    <Features />
    <ProjectGrid />
    <About />
    <FAQ />
    <Footer />
    <ScrollToTop />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;