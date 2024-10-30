import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/ContactMe.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const [showMessage, setShowMessage] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,   
    
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      };

    return (
        <div>
        <NavBar/>
        <div className = "contact-container">
            <h2>Contact Me (聯絡我)</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name (名):</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name (姓):</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">Email (電郵):</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number (電話號碼):</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="message">Message (訊息):</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>
                </div>
                <center><button type="submit">Submit</button></center>
            </form>
            {showMessage && (<div className="success-message">Your message has been sent!</div>)}
        </div>
        <div><br/></div>
        <Footer/>
        </div>
    );
};

export default Contact;