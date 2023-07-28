"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contactCss from './Contact.module.css'

export default function Contact() {
    const [formData, setFormData] = useState({from_name: '', email: '', message: ''})

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    function handleSubmit(e) {
        if (!formData.from_name) 
            return alert('The name field cannot be empty')
        if (!formData.email)
            return alert('The email field cannot be empty')
        if (!formData.email.includes("@"))
            return alert('The provided email is invalid')
        if (!formData.message)
            return alert('The message field cannot be empty')

        e.preventDefault();

        emailjs.send('service_562q4uf', 'template_o8qaj0m', formData, 'rnUqyoR85XbIzJaWP')
            .then((result) => {
                alert('Your message has been successfully sent!')
                console.log(result)
            }, (error) => {
                alert('There was a problem sending the your message')
                console.log(error)
            });
        
        setFormData({from_name: '', email: '', message: ''})
    }

    return (
        <div className={contactCss.form}>
            <div className={contactCss.inputContainer}>
                <label htmlFor='name'>Name:</label>
                <input id='name' type="text" placeholder='Name' name="from_name" value={formData.from_name} onChange={handleChange} required/>
            </div>
            <div className={contactCss.inputContainer}>
                <label htmlFor='email'>Email:</label>
                <input id='email' type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className={contactCss.textareaContainer}>
                <label className={contactCss.textareaLabel} htmlFor='message'>Message:</label>
                <textarea id='message' placeholder='Message' name="message" value={formData.message} onChange={handleChange} required/>
            </div>
            <button className={contactCss.submit} onClick={handleSubmit}>Submit</button>            
        </div>
    );
};