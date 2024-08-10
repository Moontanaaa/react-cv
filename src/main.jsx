// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home/homePage';
import BlogPage from './pages/blog/blogPage';
import ServicePage from './pages/service/servicePage';
import RealisationPage from './pages/realisation/realisationPage';
import Header from './components/header/headerComponent';
import ContactPage from './pages/contact/contactPage';
import LegalMention from './pages/legal mention/legalMention';
import AboutComponent from './components/About/AboutComponent';
import Footer from './components/footer/footerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/realisations" element={<RealisationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal-mention" element={<LegalMention />} />
        <Route path="/about" element={<AboutComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);

