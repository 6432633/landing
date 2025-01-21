import React from "react";
import Header from "../Homepage/Header";
import Footer from "../Footer/Footer";
import './Policy.css'

const TermsAndConditions = () => {
    return (
        <div>
            <Header />
            <div id="terms-and-conditions">
                <h1>Terms And Conditions</h1>
                <ol>
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#definitions">Definitions</a></li>
                    <li><a href="#payments-fees">Payments and Fees</a></li>
                    <li><a href="#data-privacy">Data Privacy</a></li>
                    <li><a href="#intellectual-property">Intellectual Property Rights</a></li>
                    <li><a href="#restrictions-guarantees">Restrictions and Guarantees</a></li>
                    <li><a href="#limitation-liability">Limitation of Liability</a></li>
                    <li><a href="#customer-liability">Customer’s Liability</a></li>
                    <li><a href="#governing-law">Governing Law</a></li>
                    <li><a href="#refund-policy">Refund Policy</a></li>
                    <li><a href="#miscellaneous">Miscellaneous</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ol>

                <h2 className="policy-h2" id="introduction">1. Introduction</h2>
                <p>1.1 These Terms and Conditions (hereinafter may be referred to as: “Terms of use”, “Terms of Service”, “Terms”, “Agreement”) govern your usage of our Codecraft Academy website, software product, and/or other related products, as specified in these Terms and Conditions, unless otherwise provided.</p>
                <p>1.2 As used throughout these Terms and Conditions, in their current form, and as may be amended by Codecraft Academy, these Terms represent a binding agreement between you, as a Customer (defined below), and Codecraft Academy, a Moldovan company with registration number 559139-2148, registered at A.Doga 32/2 office 5 Chisinau, Republic of Moldova. By purchasing our courses or registering on the Website, you agree to abide by these Terms and Conditions and to use the Service in accordance with these Terms.</p>
                <p>1.3 We offer online services through our website <a href="https://code-craft.academy/">https://codec-raft.academy/</a> (the “Website”) and social media accounts (the “Service”). The Service is provided by Codecraft Academy and includes educational courses that you may purchase on the Website.</p>

                <h2 className="policy-h2" id="definitions">2. Definitions</h2>
                <p>2.1 As used in this Agreement, the following terms shall have the following meanings:</p>
                <ul>
                    <li>The terms “us”, “we”, “our”, Codecraft Academy” refer to Codecraft Academy.</li>
                    <li>The terms “Customer”, “you” refer to an individual who has reached the age of consent under the law of the respective country where he/she is located and who has the legal capacity to enter into a contract with us.</li>
                    <li>“Course” means the educational service provided by Codecraft Academy as described on the Website.</li>
                    <li>“Agreement” refers to these Terms and Conditions, including the refund policy and privacy policy.</li>
                </ul>

                <h2 className="policy-h2" id="payments-fees">3. Payments and Fees</h2>
                <p>3.1 The fees we charge from Customers for using education courses are listed on the Service. All payments should be made through our authorized payment processor.</p>
                <p>3.2 You agree to pay all fees and charges associated with your account on time. Failure to do so may result in suspension or termination of your access to the Service.</p>
                <p>3.3 Codecraft Academy reserves the right to modify the fees and charges at any time. Any changes will be communicated to you in advance, allowing you the choice to continue or discontinue using the Service.</p>

                <h2 className="policy-h2" id="data-privacy">4. Data Privacy</h2>
                <p>We strongly respect your right to privacy. We may use information you provide to us solely to provide you with the Service. For more details, please refer to our Privacy Policy.</p>

                <h2 className="policy-h2" id="intellectual-property">5. Intellectual Property Rights</h2>
                <p>5.1 All content included as part of the Service, such as texts, educational programs, graphics, logos, images, and software, are owned by Codecraft Academy and are protected by copyright laws.</p>
                <p>5.2 You are granted a limited, non-transferable, non-exclusive license to use the content provided as part of the Service solely for personal, non-commercial purposes.</p>
                <p>5.3 You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or content obtained from the Service.</p>

                <h2 className="policy-h2" id="restrictions-guarantees">6. Restrictions and Guarantees</h2>
                <p>6.1 You are specifically restricted from all of the following:</p>
                <ul>
                    <li>Assigning any rights or delegating your duties under this Agreement;</li>
                    <li>Publicly performing and/or showing any Service material;</li>
                    <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to our Service;</li>
                    <li>Using the Service in any way that is or may be damaging to Codecraft Academy;</li>
                    <li>Using the Service contrary to applicable laws and regulations.</li>
                </ul>

                <h2 className="policy-h2" id="limitation-liability">7. Limitation of Liability</h2>
                <p>7.1 Unless stated in these Terms, we are not liable to the Customer or to anyone else, directly or indirectly, for any loss or damage, whether arising from contract, tort, or otherwise, even if foreseeable.</p>

                <h2 className="policy-h2" id="customer-liability">8. Customer’s Liability</h2>
                <p>8.1 If the Customer fails to comply with the terms of the Agreement, Codecraft Academy may suspend or terminate the Customer’s access to the Service without notice.</p>
                <p>8.2 The Customer will indemnify Codecraft Academy from any claims, damages, or losses incurred as a result of their violation of these Terms.</p>

                <h2 className="policy-h2" id="governing-law">9. Governing Law</h2>
                <p>9.1 This Agreement will be governed by and construed in accordance with Moldovan law. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Republic of Moldova.</p>

                <h2 className="policy-h2" id="refund-policy">10. Refund Policy</h2>
                <p>10.1 Refunds may be provided to Customers under the law of the Republic of Moldova and applicable legislation, as detailed in our Refund Policy.</p>

                <h2 className="policy-h2" id="miscellaneous">11. Miscellaneous</h2>
                <p>11.1 Codecraft Academy reserves the right to modify these Terms and Conditions at any time. Any modifications will be effective upon posting on the Website.</p>
                <p>11.2 If any provision of this Agreement is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

                <h2 className="policy-h2" id="contact-us">12. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at <a href="mailto:adrianrascovschi@gmail.com">adrianrascovschi@gmail.com</a>.</p>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
