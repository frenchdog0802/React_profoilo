import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you! Your message has been received.');
                navigate('/');
            } else {
                const errData = await response.json();
                alert('Error: ' + (errData.error || 'Something went wrong.'));
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <h2>Contact Me</h2>

            {/* Contact Info Panel */}
            <div>
                <p><strong>Email:</strong> chsiao3@my.centennialcollege.ca</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Location:</strong> Canada</p>
            </div>

            <hr />

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div>
                    <label>Contact Number: </label>
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Message: </label><br />
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" cols="40" required />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </>
    );
}
