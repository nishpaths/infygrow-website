import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Tools from "./pages/Tools";
import Team from "./pages/Team";
import Navbar from './components/navbar';
import Why_Us from './pages/Why_Us';
import Life_Insurance_Section from './pages/services/Life_Insurance_Section';
import Health_Insurance_Section from './pages/services/Health_Insurance_Section';
import Retirement_Planning_Section from './pages/services/Retirement_Planning_Section';
import Legacy_Planning_Section from './pages/services/Legacy_Planning_Section';
import Business_Opportunity_Section from './pages/services/Business_Opportunity_Section';
import './App.css'
import Footer from './components/footer';
import WillAndTrust from './pages/services/WillAndTrust';
import RetirementPlanning from './pages/services/Retirement_Planning';
import LifeInsurance from './pages/services/Life_Insurance';
import Long_Term_Care from './pages/services/Long_Term_Care';
import Final_Expenses from './pages/services/Final_Expenses';
import Real_Estate from './pages/services/Real_Estate';
import Investments from './pages/services/Investments';
import Buisness_Opportunity from './pages/services/Buisness_Opportunity';
import Health_Insurance from './pages/services/Health_Insurance';
import Visitors_Insurance from './pages/services/Visitors_Insurance';
import Supplemental_Health_Plans from './pages/services/Supplemental_Health_Plans';
import Term_Life_Insurance from './pages/services/Term_Life_Insurance';
import Permanent_Life_Insurance from './pages/services/Permanent_Life_Insurance';
function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path = "/why-us" element = {<Why_Us/>} />
          <Route path="/services/life-insurance-section" element={<Life_Insurance_Section />} />
          <Route path="/services/health-insurance-section" element={<Health_Insurance_Section />} />
          <Route path="/services/retirement-planning-section" element={<Retirement_Planning_Section />} />
          <Route path="/services/legacy-planning-section" element={<Legacy_Planning_Section />} />
          <Route path="/services/business-opportunity-section" element={<Business_Opportunity_Section />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/tools" element={<Tools />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/services/will-trust" element={<WillAndTrust />} />
          <Route path="/services/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/services/life-insurance" element={<LifeInsurance />} />
          <Route path="/services/term-life-insurance" element={<Term_Life_Insurance />} />
          <Route path="/services/permanent-life-insurance" element={<Permanent_Life_Insurance />} />
          <Route path="/services/long-term-care" element={<Long_Term_Care />} />
          <Route path="/services/final-expenses" element={<Final_Expenses />} />
          <Route path="/services/real-estate" element={<Real_Estate />} />
          <Route path="/services/investments" element={<Investments />} />
          <Route path="/services/business-opportunity" element={<Buisness_Opportunity />} />
          <Route path="/services/health-insurance" element={<Health_Insurance />} />
          <Route path="/services/visitors-insurance" element={<Visitors_Insurance />} />
          <Route path="/services/supplemental-health-plans" element={<Supplemental_Health_Plans />} />
        </Routes>
      </main>
      <Footer/>
   </>
  )
}

export default App
