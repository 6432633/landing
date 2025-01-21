import logo from './logo.svg';
import './App.css';
import ManualTestingPayment from './Payment/ManualTestingPayment'
import ManualTestingProPayment from './Payment/ManualTestingProPayment'
import SoftwareTestingCypressPayment from './Payment/SoftwareTestingCypressPayment';
import SoftwareTestingCypressProPayment from './Payment/SoftwareTestingCypressPayment';
import SoftwareTestingJavaPayment from './Payment/SoftwareTestingJavaPayment'
import SoftwareTestingJavaProPayment from './Payment/SoftwareTestingJavaProPayment'
import PrivacyPolicy from './Homepage/PrivacyPolicy';
import TermsAndConditions from './Homepage/TermsAndConditions'
import HomePage from './Homepage/HomePage';
import ContactUs from './Homepage/ContactUs';
import EnrollNow from './Homepage/EnrollNow';
import ManualTestingStandardDownload from './DownloadPages/ManualTestingStandardDownload'
import SoftwareTestingJavaStandardDownload from './DownloadPages/SoftwareTestingJavaStandardDownload'
import ManualTestingProDownload from './DownloadPages/ManualTestingProDownload'
import SoftwareTestingJavaProDownload from './DownloadPages/SoftwareTestingJavaProDownload'
import SoftwareTestingCypressProDownload from './DownloadPages/SoftwareTestingCypressProDownload'
import SoftwareTestingCypressStandardDownload from './DownloadPages/SoftwareTestingCypressStandardDownload'
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
    <Route path="/mtp" element={<ManualTestingPayment/>}/>
    <Route path="/mtpp" element={<ManualTestingProPayment/>}/>
    <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route path="/enroll-now" element={<EnrollNow/>}/>
    <Route path="/mtsd" element={<ManualTestingStandardDownload/>}/>
    <Route path="/stcp" element={<SoftwareTestingCypressPayment/>}/>
    <Route path="/stcpp" element={<SoftwareTestingCypressProPayment/>}/>
    <Route path="/stjp" element={<SoftwareTestingJavaPayment/>}/>
    <Route path='/stjpp' element={<SoftwareTestingJavaProPayment/>}/>
    <Route path='/stjsd' element={<SoftwareTestingJavaStandardDownload/>}/>
    <Route path='/mtpd' element={<ManualTestingProDownload/>}/>
    <Route path='/stjpd' element={<SoftwareTestingJavaProDownload/>}/>
    <Route path='/stcpd' element={<SoftwareTestingCypressProDownload/>}/>
    <Route path='/stcsd' element={<SoftwareTestingCypressStandardDownload/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
