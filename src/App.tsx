import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MainPages/Home';
import About from './MainPages/About';
import Gallery from './MainPages/gallery';
import FAQ from './MainPages/faq';
import Contact from './MainPages/contact';
import Layout from './Layout/layout';
import ServiceDetail from './PageComponents/serviceDetail';
import { ThemeProvider } from './CustomComponents/darkmode';
import ScrollToTop from './CustomComponents/ScrollToTop';
import PrivacyPolicy from './MainPages/privacypolicy';
import TermsConditions from './MainPages/TermsConditions';
import ServicesHome from './MainPages/servicesHome';
import ProjectHolder from './MainPages/prohectHolder';
import ProjectDetail from './MainPages/ProjectsDetails';
import './App.css';
import { ServicesProvider } from './CustomComponents/ServicesContext';
import { ProjectsProvider } from './CustomComponents/projectsContext';
import Unfound from './MainPages/unfound';

function App() {
  return (
    <ThemeProvider>
      <ServicesProvider>
        <ProjectsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/services/:id' element={<ServiceDetail />} />
                <Route path='/services' element={<ServicesHome />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms-conditions' element={<TermsConditions />} />
                <Route path='/projects' element={<ProjectHolder />} />
                <Route path='/projects/:id' element={<ProjectDetail />} />
                <Route path="*" element={<Unfound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProjectsProvider>
      </ServicesProvider>
    </ThemeProvider>
  );
}

export default App;
