import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Home from './MainPages/Home';
import About from './MainPages/About';
import Gallery from './MainPages/gallery';
import FAQ from './MainPages/faq';
import Contact from './MainPages/contact';
import Layout from './Layout/layout';
import ServiceDetail from './CustomComponents/serviceDetail';
import { ThemeProvider } from './CustomComponents/darkmode';
import ScrollToTop from './CustomComponents/ScrollToTop';
import TermsConditions from './MainPages/Legal/TermsConditions';
import ServicesHome from './MainPages/servicesHome';
// import ProjectHolder from './MainPages/prohectHolder';
// import ProjectDetail from './MainPages/ProjectsDetails';
import './App.css';
import { ServicesProvider } from './CustomComponents/ServicesContext';
import { ProjectsProvider } from './CustomComponents/projectsContext';
import TermsAndConditions from './MainPages/Legal/T&C';
import PrivacyPolicy from './MainPages/Legal/privacypolicy';
import Unfound from './MainPages/404';

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
                {/* <Route path='/projects' element={<ProjectHolder />} />
                <Route path='/projects/:id' element={<ProjectDetail />} /> */}
                <Route path='/termsandconditions' element={<TermsAndConditions />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path="*" element={<Unfound />} />
              </Route>
            </Routes>
            <CookieConsent
              location="bottom"
              buttonText="I understand"
              cookieName="myAwesomeCookieName"
              style={{ background: "#323D40" }}
              buttonStyle={{ color: "#fff", backgroundColor: "#C58C49", fontSize: "13px", transition: "background-color 0.3s" }}
              buttonClasses="cookie-consent-button"
              expires={150}
            >
              This website uses cookies to enhance the user experience.{" "}
              <a href="/privacy-policy" style={{ color: "#C58C49", transition: "color 0.3s" }} className="hover:text-customBlue">
                Learn more
              </a>
            </CookieConsent>
          </BrowserRouter>
        </ProjectsProvider>
      </ServicesProvider>
    </ThemeProvider>
  );
}

export default App;

