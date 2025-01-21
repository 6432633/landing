import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Homepage/Header";
import './DownloadPages.css'
import download_icon from './Assets/download-icon.png'
const SoftwareTestingCypressStandardDownload = () => {
    const windows_download_link = "https://raw.githubusercontent.com/6432633/course-download-testing/refs/heads/main/Sql.pdf";
    const mac_download_users = "https://raw.githubusercontent.com/6432633/course-download-testing/refs/heads/main/Sql.pdf"
    return (
        <div style={{ height: "1000px" }}>
            <Header />
            <div class="download-container">
                <div class="download-subcontainer">
                    <h1>Click and download your course.For windows users.</h1>
                    <a href={windows_download_link}><img src={download_icon} alt="" /></a>
                </div>
                <div class="download-subcontainer">
                    <h1>Click and download your course. For MAC OS users.</h1>
                    <a href={mac_download_users}><img src={download_icon} alt="" /></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SoftwareTestingCypressStandardDownload