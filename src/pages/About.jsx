import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import styled from 'styled-components';
import Computer from '../components/Computer';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`

const About = () => {

    return (
        <Section id="about">
            <div className='container about'>
                <div className='top'>
                    <div className='title'>
                        <h1>Hi, I'm Leonardo Barbosa Silva</h1>
                        <div className='subtitle'>
                            <div className='line-between'>
                                <div className='line' />
                                <h3>A Science Computer student and</h3>
                                <div className='line' />
                            </div>
                            <h2>Full Stack developer</h2>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <Canvas>
                        <ambientLight intensity={1} />
                        <directionalLight position={[1, 1, 1]} intensity={1} />
                        <pointLight position={[-1, -1, -1]} intensity={1} />
                        <OrbitControls enableZoom={false} />
                        <group scale={[2, 2, 2]}>
                            <Computer position={[-2, -4, -1.5]} />
                        </group>
                    </Canvas>
                </div>
            </div>
        </Section>
    )
}


export default About;