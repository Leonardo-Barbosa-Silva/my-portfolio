import { useState } from 'react';
import styled from 'styled-components';
import MapChart from '../components/Map';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex
`

const Contact = () => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })

    function onChangeForm(e) {
        console.log(e)
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const { name, email, message } = formData

    return (
        <Section>
            <div className='left contact'>
                <form>
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
        </Section>
    )
}


export default Contact;