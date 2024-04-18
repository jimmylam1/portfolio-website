"use client"

import React, { useState, useRef } from 'react';
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

    async function postData() {
        const data = form.current
        const response = await fetch('https://api.jimmyl.dev/contact', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                from_name: data.name.value,
                email: data.email.value,
                message: data.message.value
            })
        });
        
        const json = await response.json();
        return {success: response.status === 200, json}
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (isSubmitting)
            return
        setIsSubmitting(true)

        postData()
            .then(({ success }) => {
                if (!success) {
                    setIsSubmitting(false)
                    setModalData(redModal)
                    return
                }
                setIsSubmitting(false)
                setModalData(greenModal)
                e.target.reset()
            })
            .catch((error) => {
                setIsSubmitting(false)
                setModalData(redModal)
            });
        return
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