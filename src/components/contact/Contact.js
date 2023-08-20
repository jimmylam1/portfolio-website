"use client"

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactCss from './Contact.module.css'
import Modal from '../modal/Modal';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const form = useRef()

    const redModal = {
        color: 'red',
        header: 'There was a problem sending your message.',
        content: 'If the problem persists, you can email me directly at jimmy@jimmyl.dev',
        handleClose: handleModalClose
    }
    const greenModal = {
        color: 'green',
        header: 'Your message was successfully sent!',
        content: '',
        handleClose: handleModalClose
    }

    const [modalData, setModalData] = useState(null)
    function handleModalClose() {
        setModalData(null)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isSubmitting)
            return
        setIsSubmitting(true)

        emailjs.sendForm('service_562q4uf', 'template_o8qaj0m', form.current, 'rnUqyoR85XbIzJaWP')
            .then((result) => {
                setIsSubmitting(false)
                setModalData(greenModal)
                e.target.reset()
            })
            .catch((error) => {
                setIsSubmitting(false)
                setModalData(redModal)
            });
    }

    return (
        <>
            <form ref={form} onSubmit={handleSubmit} className={contactCss.form}>
                <div className={contactCss.inputContainer}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type="text" placeholder='Enter your name' name="from_name" required/>
                </div>
                <div className={contactCss.inputContainer}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type="email" placeholder='Enter your email address' name="email" required/>
                </div>
                <div className={contactCss.inputContainer}>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' placeholder='Enter your message' name="message" required/>
                </div>
                <button className={isSubmitting ? contactCss.submitting : contactCss.submit} type='submit'>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>
            {modalData && <Modal {...modalData}/>}
        </>
    );
};