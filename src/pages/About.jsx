import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import styled from 'styled-components';
import Computer from '../components/Computer';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
`

const About = () => {

    return (
        <Section id="about">
            <div className='left about'>
                <div className='line title'>
                    <div className='ball' /><div className='line' />
                </div>
                <div className='title'>
                    <h1>I'm Leonardo Barbosa Silva</h1>
                    <div className='subtitle'>
                        <h2>A Science Computer student and<br /><span>Full Stack developer</span></h2>
                    </div>
                </div>
            </div>
            <div className='right about'>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Stage environment="city" >
                        <Computer />
                    </Stage>
                </Canvas>
            </div>
        </Section>
    )
}


export default About;