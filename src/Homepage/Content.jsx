import React, { useState } from "react";
import diploma from './Assets/diploma.svg'
import medal_prize_star from './Assets/medal_prize_star.svg'
import teacher from './Assets/teacher.svg'
import pilon_1 from './Assets/pilon_1.webp'
import pilon_2 from './Assets/pilon_2.webp'
import pilon_3 from './Assets/pilon_3.webp'
import pilon_4 from './Assets/pilon_4.webp'
import complete_mark from './Assets/complete_mark.svg'
import arrow from './Assets/arrow.webp'
import novice from './Assets/novice.webp'
import junior from './Assets/junior.webp'
import middle from './Assets/middle.webp'
import senior from './Assets/senior.webp'
import client_1 from './Assets/client_1.png'
import client_2 from './Assets/client_2.png'
import client_3 from './Assets/client_3.png'
import './Content.css'
const Content = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    const faqData = [
        {
            question: "What is your refund policy?",
            answer: "We offer a full refund within 14 days of purchase if you are not satisfied with our product.",
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery typically takes 5-7 business days depending on your location.",
        },
        {
            question: "Do you offer technical support?",
            answer: "Yes, we provide 24/7 technical support through our online platform.",
        },
    ];
    return (

        <div>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path transform="rotate(180 500 5)" d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>
            <div className="content-container">
                <div>
                    <div className="column">
                        <h1 className="slogan">BUILD YOUR FUTURE <br />
                            WITH CODECRAFT ACADEMY
                        </h1>
                    </div>
                    <div className="column">
                        <div className="key-points"><strong>►</strong> Online Learning</div>
                        <div className="key-points"><strong>►</strong> Flexible Learning</div>
                        <div className="key-points"><strong>►</strong> Mentorship</div>
                    </div>
                </div>
                <div >
                    <div className="column">
                        <div className="sub-column">
                            <img src={diploma} alt="" />
                            <div className="text-container">
                                <div>On Market</div>
                                <div>More than 5 years</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="sub-column">
                            <img src={medal_prize_star} alt="" />
                            <div className="text-container">
                                <div>200+</div>
                                <div>Alumnies per year</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="sub-column">
                            <img src={teacher} alt="" />
                            <div className="text-container">
                                <div>4.9 / 5 ⭐️⭐️⭐️⭐️⭐️</div>
                                <div>Most students come on personal recommendation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>
            <div className="who-benefit">
                <div className="who-benefit-point">
                    <img src={pilon_1} alt="" />
                    <h1>Absolute Begginers</h1>
                    <p>We teach from scratch,<br />
                        so you don't need prior <br />
                        training or technical education</p>
                </div>
                <div className="who-benefit-point">
                    <img src={pilon_2} alt="" />
                    <h1>Absolute Begginers</h1>
                    <p>We teach from scratch,<br />
                        so you don't need prior <br />
                        training or technical education</p>
                </div>
                <div className="who-benefit-point">
                    <img src={pilon_3} alt="" />
                    <h1>Absolute Begginers</h1>
                    <p>We teach from scratch,<br />
                        so you don't need prior <br />
                        training or technical education</p>
                </div>
                <div className="who-benefit-point">
                    <img src={pilon_4} alt="" />
                    <h1>Absolute Begginers</h1>
                    <p>We teach from scratch,<br />
                        so you don't need prior <br />
                        training or technical education</p>
                </div>
            </div>
            <div className="white-block">
            </div>
            <h1 className="why-start-now-text">Why should you start learning now?</h1>
            <div className="why-start-now">
                <div className="w-column">
                    <div className="w-sub-column">
                        <img src={complete_mark} alt="" />
                        <div className="text-container-black">
                            <div>Opportunity to find a job anywhere in the world</div>
                        </div>
                    </div>
                    <div className="w-sub-column">
                        <img src={complete_mark} alt="" />
                        <div className="text-container-black">
                            <div>Access to the training materials remains forever</div>
                        </div>
                    </div>
                    <div className="w-sub-column">
                        <img src={complete_mark} alt="" />
                        <div className="text-container-black">
                            <div>The money invested in training will be returned after a couple of months on the job</div>
                        </div>
                    </div>
                </div>
                <div className="w-column">
                    <div className="w-sub-column">
                        <img src={complete_mark} alt="" />
                        <div className="text-container-black">
                            <div>Schedule allows you to combine your studies with work and family</div>
                        </div>
                    </div>
                    <div className="w-sub-column">
                        <img src={complete_mark} alt="" />
                        <div className="text-container-black">
                            <div>We train people of all ages and qualifications. Even those who find it difficult reach their goals.</div>
                        </div>
                    </div>
                    <div className="w-sub-column">
                        <img src={complete_mark} alt="" />
                        <div className="text-container-black">
                            <div>Mentorship during and after course</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-block">
            </div>
            <h1 className="why-start-now-text">IT career path</h1>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path transform="rotate(180 500 5)" d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>

            <div className="career-path">

                <div className="path">
                    <img src={novice} alt="" />
                    <div className="path-level">Now</div>
                    <div className="path-action">Start Learning</div>
                </div>
                <div className="path"><img src={arrow} alt="arrow" /></div>
                <div className="path">
                    <img src={junior} alt="" />
                    <div className="path-level">Junior</div>
                    <div className="path-action">up to 2000$</div>
                </div>
                <div className="path"><img src={arrow} alt="arrow" /></div>
                <div className="path">
                    <img src={middle} alt="" />
                    <div className="path-level">Middle</div>
                    <div className="path-action">2000$ - 3000$</div>
                </div>
                <div className="path"><img src={arrow} alt="arrow" /></div>
                <div className="path">
                    <img src={senior} alt="" />
                    <div className="path-level">Senior</div>
                    <div className="path-action">3000$ - 10000$</div>
                </div>
            </div>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>
            <div className="white-block">
            </div>
            <h1 className="why-start-now-text">Why should you choose us?</h1>
            <div className="why-us">
                <div className="why-block">
                    <div className="why-us-header">Learning focused on practice</div>
                    <div className="why_us_text">Dozens of practical tasks of varying <br />
                        complexity are waiting for you during <br />
                        the course to reinforce the theory. At the end <br />
                        of the course, you will write a project that will <br />
                        become a part of your portfolio and will not be <br />
                        ashamed to attach it to your resume
                    </div>
                </div>
                <div className="why-block">
                    <div className="why-us-header">Learning focused on practice</div>
                    <div className="why_us_text">Dozens of practical tasks of varying <br />
                        complexity are waiting for you during <br />
                        the course to reinforce the theory. At the end <br />
                        of the course, you will write a project that will <br />
                        become a part of your portfolio and will not be <br />
                        ashamed to attach it to your resume
                    </div>
                </div>
                <div className="why-block">
                    <div className="why-us-header">Learning focused on practice</div>
                    <div className="why_us_text">Dozens of practical tasks of varying <br />
                        complexity are waiting for you during <br />
                        the course to reinforce the theory. At the end <br />
                        of the course, you will write a project that will <br />
                        become a part of your portfolio and will not be <br />
                        ashamed to attach it to your resume
                    </div>
                </div >
            </div >
            <div className="white-block">
            </div>
            <h1 className="why-start-now-text">Learning process stages</h1>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path transform="rotate(180 500 5)" d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>

            <div className="career-path">

                <div className="path">
                    <div className="circle"></div>
                    <div className="path-level">Theory</div>
                    <div className="path-action">Dive deep into the theoretical material using the author's detailed video lessons, conveniently available in your personal dashboard. These resources are designed to enhance your understanding and are accessible at any time, allowing you to learn at your own pace.</div>
                </div>
                <div className="path"><img src={arrow} alt="arrow" /></div>
                <div className="path">
                    <div className="circle"></div>
                    <div className="path-level">Practice</div>
                    <div className="path-action">Tackle practical challenges, work through problem-solving questions alongside the mentor, and get interview-ready with the guidance of a mentor.</div>
                </div>
                <div className="path"><img src={arrow} alt="arrow" /></div>
                <div className="path">
                    <div className="circle"></div>
                    <div className="path-level">Mentorship</div>
                    <div className="path-action">Your mentor will assist in clarifying the most challenging topics and will share industry best practices from real projects. Mentorship is available not only throughout the course but also after its completion.</div>
                </div>
                <div className="path"><img src={arrow} alt="arrow" /></div>
                <div className="path">
                    <div className="circle"></div>
                    <div className="path-level">Result</div>
                    <div className="path-action">Each alumnus will be fully prepared for interviews and will gain hands-on experience throughout the learning process and mentorship program.</div>
                </div>
            </div>
            <svg className="zigzag-svg" viewBox="0 0 1000 10">
                <path d="M992 8.2L983.8 0l-8.2 8.2-8.2-8.2-8.2 8.2L951 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L869 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L787 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L705 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L623 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L541 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L459 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L377 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L295 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L213 0l-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2-8.2-8.2-8.2 8.2L131 0l-8.2 8.2-8.2-8.2-8.2 8.2L98.2 0 90 8.2 81.8 0l-8.2 8.2L65.4 0l-8.2 8.2L49 0l-8.2 8.2L32.6 0l-8.2 8.2L16.2 0 8 8.2-.2 0v10h1000.4V0"></path>
            </svg>
            <div className="white-block"></div>
            <div className="course-details">
                <h1 className="why-start-now-text">Our Courses</h1>
                <div className="why-us">
                    <div className="why-block">
                        <div className="why-us-header">Manual Testing</div>
                        <div className="why_us_text">
                            <ul>
                                <li>Testing Fundamentals</li>
                                <li>Test Techniques</li>
                                <li>Testing Process</li>
                                <li>Development Process</li>
                                <li>SQL</li>
                                <li>API Testing</li>
                                <li>Test Plan And Test Strategy</li>
                                <li>ISQB Exam preparation</li>
                                <li>Test Cases</li>
                                <li>Defect Report</li>
                                <li><strong>2 months of mentorship after course completion</strong></li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 299$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="./manual-testing-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="why-block">
                        <div className="why-us-header">Software Testing</div>
                        <div className="why_us_text">
                            <ul>
                                <li>Testing Fundamentals</li>
                                <li>SQL</li>
                                <li>API Testing</li>
                                <li>Test Plan And Test Strategy</li>
                                <li>ISQB Exam preparation</li>
                                <li>Test Cases</li>
                                <li>Defect Report</li>
                                <li>Java Programming Language</li>
                                <li>Selenium</li>
                                <li>Automation Testing Framework Design and BDD</li>
                                <li><strong>6 months of mentorship after course completion</strong></li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 999$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="./software-testing-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="why-block">
                        <div className="why-us-header">Java Basics</div>
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
                                <li>Algorithms</li>
                                <li><strong>2 months of mentorship after course completion</strong></li>
                            </ul>
                            <div style={{ marginTop: '25px', fontStyle: 'bold', fontSize: '25px' }}><strong>Price: 199$</strong></div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div className="submit-container"><div className="submit"><a href="./java-basics-payment" style={{ color: 'white' }}>Enroll Now</a></div></div>
                            </div>

                        </div>
                    </div >
                </div >
            </div>
            <div className="white-block"></div>
            <div className="testimonials">
                <div class="testimonials-section">
                    <h2 class="section-title">What Our Clients Say</h2>
                    <div class="testimonials-container">
                        <div class="testimonial-card">
                            <p class="testimonial-text">
                                "This product has completely changed the way I do business. It’s efficient, easy to use, and the support is outstanding!"
                            </p>
                            <div class="testimonial-author">
                                <img src={client_1} alt="Client 1" class="author-image" />
                                <div class="author-info">
                                    <h4 class="author-name">Jane Doe</h4>
                                    <p class="author-role">CEO, Tech Company</p>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <p class="testimonial-text">
                                "Amazing service and a great experience overall. Highly recommend to anyone looking for reliable software solutions."
                            </p>
                            <div class="testimonial-author">
                                <img src={client_2} alt="Client 2" class="author-image" />
                                <div class="author-info">
                                    <h4 class="author-name">John Smith</h4>
                                    <p class="author-role">Marketing Director, Creative Agency</p>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <p class="testimonial-text">
                                "Their expertise and professionalism are truly exceptional. The best decision we made was partnering with them."
                            </p>
                            <div class="testimonial-author">
                                <img src={client_3} alt="Client 3" class="author-image" />
                                <div class="author-info">
                                    <h4 class="author-name">Sarah Johnson</h4>
                                    <p class="author-role">Founder, Startup Co.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="white-block"></div>
            <h1 className="why-start-now-text">FAQs</h1>
            <div className="faq-container">
                {faqData.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <svg className={`faq-icon ${openIndex === index ? "rotate" : ""}`} viewBox="0 0 24 24">
                                <line x1="12" y1="5" x2="12" y2="19" stroke="black" strokeWidth="2"></line>
                                <line x1="5" y1="12" x2="19" y2="12" stroke="black" strokeWidth="2"></line>
                            </svg>
                        </div>
                        <div className="faq-answer" style={{ display: openIndex === index ? "block" : "none" }}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="white-block"></div>
        </div >
    )
}
export default Content