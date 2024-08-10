import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home/homePage';
import BlogPage from './pages/blog/blogPage';
import ServicePage from './pages/service/servicePage';
import Realisation from './pages/realisation/realisationPage';
import Header from './components/header/headerComponent';
import Contact from './pages/contact/contactPage';
import LegalMention from './pages/legal mention/legalMention';
import AboutComponent from './components/About/AboutComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter />
    <HomePage />
    <BrowserRouter />
  </StrictMode>,
)
