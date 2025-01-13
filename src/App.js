import logo from './logo.svg';
import './App.css';
import ManualTestingPayment from './Payment/ManualTestingPayment'
import SoftwareTestingPayment from './Payment/SoftwareTestingPayment';
import PrivacyPolicy from './Homepage/PrivacyPolicy';
import TermsAndConditions from './Homepage/TermsAndConditions'
import HomePage from './Homepage/HomePage';
import ContactUs from './Homepage/ContactUs';
import EnrollNow from './Homepage/EnrollNow';
import ManualTestingStandardDownload from './DownloadPages/ManualTestingStandardDownload'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/m-t-p" element={<ManualTestingPayment/>}/>
    <Route path="/software-testing-payment" element={<SoftwareTestingPayment/>}/>
    <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route path="/enroll-now" element={<EnrollNow/>}/>
    <Route path="/mtsd" element={<ManualTestingStandardDownload/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
