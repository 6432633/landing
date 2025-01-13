import React from "react";
import Header from "../Homepage/Header";
import Footer from "../Footer/Footer";
import './DownloadPages.css'
import download_icon from './Assets/download-icon.png'
const ManualTestingStandardDownload = () => {
    return (
        <div style={{height:"100px"}}>
            <Header />
            <div class="download-container">
                <div class="download-subcontainer">
                <h1>Manual Testing Standard Course</h1>
                 <img src={download_icon} alt="" />
                </div>
             
            </div>
            <Footer />
        </div>
    )
}
export default ManualTestingStandardDownload