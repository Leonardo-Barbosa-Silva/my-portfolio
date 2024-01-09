import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import styled from 'styled-components';
import Computer from '../components/Computer';
import toque from '../img/toque.png';
import { useEffect, useState } from 'react';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  margin-bottom: 300px;
`

const services = [
    "backend developer", 
    "frontend developer", 
    "full stack developer"
]

const About = () => {
    const [ serviceIndex, setServiceIndex ] = useState(0)
    const [ serviceSubIndex, setServiceSubIndex ] = useState(0)
    const [ isWriting, setIsWriting ] = useState(true)
    const [ output, setOutput ] = useState('')

    useEffect( () => {
        let timer;

        if (serviceIndex >= services.length) {
            setServiceIndex(0)
            return
        }
        
        if (isWriting && serviceSubIndex < services[serviceIndex].length) {
            timer = setTimeout( () => {
                setOutput( (prevOutput) => prevOutput + services[serviceIndex][serviceSubIndex] )
                setServiceSubIndex( (prevServiceSubIndex) => prevServiceSubIndex + 1 )
            }, 200)
        }

        if (isWriting && serviceSubIndex === services[serviceIndex].length) {
            timer = setTimeout( () => {
                setIsWriting(false)
                setServiceIndex( (prevServiceIndex) => prevServiceIndex + 1 )
                setTimeout(() => {}, 3000)
            }, 3000)
        }

        if (!isWriting && serviceSubIndex > 0) {
            timer = setTimeout( () => {
                setOutput( (prevOutput) => prevOutput.substring(0, prevOutput.length - 1) )
                setServiceSubIndex( (prevServiceSubIndex) => prevServiceSubIndex - 1 )
            }, 50)
        }

        if (!isWriting && serviceSubIndex === 0) {
            setIsWriting(true)
            setOutput(services[serviceIndex][0])
            setServiceSubIndex(1)
        }

        return () => clearTimeout(timer)

    }, [isWriting, serviceSubIndex, serviceIndex])

    const isNonMobileScreen = window.matchMedia('(min-width: 1000px)').matches

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
                            <h2>{output}</h2>
                        </div>
                    </div>
                </div>

                {isNonMobileScreen && (
                    <div className='bottom'>
                        <Canvas camera={{ position: [4, -1, 0] }}>
                            <ambientLight intensity={1} />
                            <directionalLight position={[1, 1, 1]} intensity={1} />
                            <pointLight position={[-1, -1, -1]} intensity={1} />
                            <OrbitControls enableZoom={false} />
                            <group scale={[2, 1.5, 1.5]}>
                                <Computer position={[-2, -3, -1]} />
                            </group>
                        </Canvas>
                    </div>
                )}

                {!isNonMobileScreen && (
                    <>
                        <div className='bottom'>
                            <Canvas camera={{ position: [4, -1, 0] }}>
                                <ambientLight intensity={1} />
                                <directionalLight position={[1, 1, 1]} intensity={1} />
                                <pointLight position={[-1, 4, -1]} intensity={1} />
                                <OrbitControls enableZoom={false} />
                                <group scale={[0.6, 0.5, 0.4]}>
                                    <Computer position={[-5, -1, -2]} />
                                </group>
                            </Canvas>
                        </div>
                        <img
                            src={toque} alt=""
                            style={{
                                position: 'absolute',
                                width: '30px',
                                height: '30px',
                                right: '2%',
                                bottom: '50%'
                            }}
                        />
                    </>
                )}
                </div>
        </Section>
    )
}


export default About;