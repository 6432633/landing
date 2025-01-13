import React from "react";
import Header from "./Header";
import Footer from "../Footer/Footer";
import './Content.css'
const EnrollNow = () => {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div className="white-block"></div>
            <div className="course-details">
                <h1 className="why-start-now-text">Our Courses</h1>
                <div className="why-us">
                    <div className="why-block">
                        <div className="why-us-header">Manual Testing Pro</div>
                        <div className="why_us_text">
                            <ul>
                                <li>Manual Testing Pro</li>
                                <li>Test Techniques</li>
                                <li>Testing Process</li>
                                <li>Development Process</li>
                                <li>SQL</li>
                                <li>API Testing</li>
                                <li>Test Plan And Test Strategy</li>
                                <li>ISQB Exam preparation</li>
                                <li>Test Cases</li>
                                <li>Defect Report</li>
                                <li>CV assistance</li>
                                <li>Interview Readiness</li>
                                <li>Mentorship</li>
                                <li>Individual Learning Plan</li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 499$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="#/manual-testing-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="why-block">
                        <div className="why-us-header">Software Testing(Java) Pro</div>
                        <div className="why_us_text">
                            <ul>
                                <li>Variables and Data Types</li>
                                <li>Classes, Interfaces</li>
                                <li>Arrays</li>
                                <li>Strings</li>
                                <li>Exceptions</li>
                                <li>Collections</li>
                                <li>Stream API</li>
                                <li>Annotations</li>
                                <li>Object Oriented Principles</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Manual Testing</li>
                                <li>API Testing</li>
                                <li>SQL</li>
                                <li>Individual Learning Plan</li>
                                <li>Mentorship</li>
                                <li>CV assistance</li>
                                <li>Interview Readiness</li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 999$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="#/software-testing-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="why-block">
                        <div className="why-us-header">Software Testing(Cypress) Pro</div>
                        <div className="why_us_text">
                            <ul>
                                <li>JavaScript and Typescript</li>
                                <li>Variables and Data Types</li>
                                <li>Classes, Interfaces</li>
                                <li>Arrays</li>
                                <li>Strings</li>
                                <li>Exceptions</li>
                                <li>Cypress built-in commands</li>
                                <li>Cypress hooks</li>
                                <li>Cypress Tests</li>
                                <li>CV assistance</li>
                                <li>API Testing</li>
                                <li>SQL</li>
                                <li>Manual Testing</li>
                                <li>Interview Readiness</li>
                                <li>Mentorship</li>
                                <li>Individual Learning Plan</li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 999$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="#/cypress-pro-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>

                        </div>
                    </div >
                </div >
                <div className="why-us">
                    <div className="why-block">
                        <div className="why-us-header">Manual Testing</div>
                        <div className="why_us_text">
                            <ul>
                                <li>Test Techniques</li>
                                <li>Testing Process</li>
                                <li>Development Process</li>
                                <li>SQL</li>
                                <li>Test Cases</li>
                                <li>Defect Report</li>
                                <li>Exercises for practice</li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 50$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="#/manual-testing-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="why-block">
                        <div className="why-us-header">Software Testing(Java)</div>
                        <div className="why_us_text">
                            <ul>
                                <li>Variables and Data Types</li>
                                <li>Classes, Interfaces</li>
                                <li>Arrays</li>
                                <li>Strings</li>
                                <li>Exceptions</li>
                                <li>Collections</li>
                                <li>Stream API</li>
                                <li>Manual Testing</li>
                                <li>SQL</li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 50$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="#/software-testing-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="why-block">
                        <div className="why-us-header">Software Testing(Cypress)</div>
                        <div className="why_us_text">
                            <ul>
                                <li>JavaScript and Typescript</li>
                                <li>Variables and Data Types</li>
                                <li>Classes, Interfaces</li>
                                <li>Arrays</li>
                                <li>Strings</li>
                                <li>Exceptions</li>
                                <li>Cypress built-in commands</li>
                                <li>Cypress hooks</li>
                                <li>Cypress Tests</li>
                                <li>SQL</li>
                                <li>Manual Testing</li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 50$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="#/cypress-pro-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>

                        </div>
                    </div >
                </div >
            </div>
            <Footer />
        </div>
    )

}
export default EnrollNow