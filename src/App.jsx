import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Tools from "./pages/Tools";
import Team from "./pages/Team";
import Navbar from './components/navbar';
import Why_Us from './pages/Why_Us';
import Health from './pages/services/Health';
import Wealth from './pages/services/Wealth';
import Travel from './pages/services/Travel';
import './App.css'
import Footer from './components/footer';
import WillAndTrust from './pages/services/WillandTrust';
import RetirementPlanning from './pages/services/Retirement_Planning';
import LifeInsurance from './pages/services/Life_Insurance';
import Long_Term_Care from './pages/services/Long_Term_Care';
import Final_Expenses from './pages/services/Final_Expenses';
import Real_Estate from './pages/services/Real_Estate';
import Investments from './pages/services/Investments';
import College_Savings from './pages/services/College_Savings';
import Tax_Savings from './pages/services/Tax_Savings';
import Buisness_Opportunity from './pages/services/Buisness_Opportunity';
import Health_Insurance from './pages/services/Health_Insurance';
import Visitors_Insurance from './pages/services/Visitors_Insurance';
function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path = "/why-us" element = {<Why_Us/>} />
          <Route path="/services/wealth" element={<Wealth />} />
          <Route path="/services/health" element={<Health />} />
          <Route path="/services/travel" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/tools" element={<Tools />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/services/will-trust" element={<WillAndTrust />} />
          <Route path="/services/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/services/life-insurance" element={<LifeInsurance />} />
          <Route path="/services/long-term-care" element={<Long_Term_Care />} />
          <Route path="/services/final-expenses" element={<Final_Expenses />} />
          <Route path="/services/real-estate" element={<Real_Estate />} />
          <Route path="/services/investments" element={<Investments />} />
          <Route path="/services/college-savings" element={<College_Savings />} />
          <Route path="/services/tax-savings" element={<Tax_Savings />} />
          <Route path="/services/business-opportunity" element={<Buisness_Opportunity />} />
          <Route path="/services/health-insurance" element={<Health_Insurance />} />
          <Route path="/services/visitors-insurance" element={<Visitors_Insurance />} />
        </Routes>
      </main>
      <Footer/>
   </>
  )
}

export default App
