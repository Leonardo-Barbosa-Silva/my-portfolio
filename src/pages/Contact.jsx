import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import MapChart from '../components/Map';


const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
`

const Contact = () => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [ emailSucess, setEmailSuccess ] = useState(false)

    function onChangeForm({ target: { name, value } }) {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const { name, email, message } = formData

    const handleSubmit = async (e) => {
        e.preventDefault()

        setFormData({
            name: '',
            email: '',
            message: ''
        })

        await emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_SERVICE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
            .then(() => {
                setEmailSuccess(true)
            }, (error) => {
                setEmailSuccess(false)
                console.log(error)
            })
    }

    useEffect( () => {
        let timer

        if (emailSucess) {
            timer = setTimeout( () => {
                setEmailSuccess(false)
            }, 3000)
        }

        return () => {
            clearTimeout(timer);
        }
    }, [emailSucess])

    return (
        <Section id="contact">
            <div className='left contact'>
                <form onSubmit={handleSubmit}>
                    <h2>Contact Me</h2>
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={onChangeForm}
                        required
                    />
                    <input
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={onChangeForm}
                        required
                    />
                    <textarea
                        name='message'
                        placeholder='Write your message'
                        value={message}
                        onChange={onChangeForm}
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>

            <div className='right contact'>
                <MapChart />
            </div>

            
                {emailSucess && (
                    <div className='email-success'>
                        <p>Email successfully sent</p>
                    </div>
                )}
            
        </Section>
    )
}


export default Contact;