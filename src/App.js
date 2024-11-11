import logo from './logo.svg';
import './App.css';
import JavaBasicsPayment from './Payment/JavaBasicsPayment'
import ManualTestingPayment from './Payment/ManualTestingpayment'
import SoftwareTestingPayment from './Payment/SoftwareTestingPayment';
import PrivacyPolicy from './Homepage/PrivacyPolicy';
import TermsAndConditions from './Homepage/TermsAndConditions'
import HomePage from './Homepage/HomePage';
import ContactUs from './Homepage/ContactUs'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/java-basics-payment" element={<JavaBasicsPayment/>}/>
    <Route path="/manual-testing-payment" element={<ManualTestingPayment/>}/>
    <Route path="/software-testing-payment" element={<SoftwareTestingPayment/>}/>
    <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
