import React, { useState } from "react";
import Header from '../Homepage/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";
const ManualTestingProPayment = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        fullName: '',
        validTo: '',
        cvv: '',
        customerId: '',
        courseId: 0,
        amount: 0
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitPayment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('paynet url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Payment submitted successfully');
                navigate('/')
            } else {
                console.error('Failed to submit payment');
            }
        } catch (error) {
            console.error('Error submitting payment:', error);
        }
    };
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()
    const handleCheckboxChange = () => {
        setIsChecked((prevState) => !prevState);
    };
    return(
        <div>
            <Header/>
            <div>
                <div className="header">
                    <div className="text">Enroll To Manual Testing Pro</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="text"
                            name="course"
                            style={{ paddingLeft: '10px' }}
                            readOnly
                            value="Software Testing" // Display the course name
                        />
                    </div>
                    <div className="input">
                        <input type="text" name="fullName" placeholder="Card Holder Name" style={{ paddingLeft: '10px' }} value={formData.fullName} onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="text" name="cardNumber" placeholder="Card Number" style={{ paddingLeft: '10px' }} value={formData.cardNumber} onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="text" name="validTo" placeholder="Expiry Date" style={{ paddingLeft: '10px' }} value={formData.validTo} onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="text" name="cvv" placeholder="CVV" style={{ paddingLeft: '10px' }} value={formData.cvv} onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="text" name="price" style={{ paddingLeft: '10px' }} value={`499 $`} readOnly />
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="termsandconditions"
                            name="termsandconditions"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="termsandconditions" style={{ paddingLeft: '5px' }}>
                            I accept the <a href="#/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="#/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        </label>
                    </div>
                    <div className="submit-container">
                        <button className={isChecked ? "submit" : "submit gray"} type="submit" onClick={submitPayment} disabled={!isChecked}>
                            Buy
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ManualTestingProPayment