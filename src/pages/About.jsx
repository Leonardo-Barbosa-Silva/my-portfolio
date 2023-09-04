import { useState } from 'react';
import styled from 'styled-components';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
`

const About = () => {

    const [ option, setOption ] = useState('me')

    return (
        <Section id="#about">
            <div className='navigation about'>
                <div className='line'></div>
                <nav>
                    <ul>
                        <li><a href="#me">Me</a></li>
                        <li><a href="#experiences">Experiences</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
                <div className='line'></div>
            </div>

            <div className='slide'>
                <div className='slider'>
                    <section id='me'>
                        <div className='title'>
                            <h1>I'm Leonardo Barbosa Silva</h1>
                            <div className='subtitle'>
                                <h2>A Science Computer student and a Full Stack programmer AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
                            </div>
                        </div>
                    </section>
                    <section id='experiences'>

                    </section>
                    <section id='projects'>

                    </section>
                </div>
            </div>
        </Section>
    )
}


export default About;