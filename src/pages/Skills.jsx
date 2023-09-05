import { Canvas } from '@react-three/fiber';
import {
    Decal,
    OrbitControls,
    useTexture
} from '@react-three/drei';
import styled from 'styled-components';
import javascript from '../img/javascript.png'
import nodejs from '../img/nodejs.png'
import git from '../img/git.png'
import css from '../img/css.png'
import html from '../img/html.png'
import typescript from '../img/typescript.png'
import react from '../img/reactjs.png'
import python from '../img/python.svg'
import redux from '../img/redux.png'
import sass from '../img/sass.svg'
import mongodb from '../img/mongodb.png'
import material from '../img/material.svg'


const Section = styled.section`
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
`

const Ball = ({ icon }) => {
    const [ decal ] = useTexture([ icon ])

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />
            <mesh castShadow receiveShadow scale={0.7}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#005588'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.6}
                    map={decal}
                    flatShading
                />
            </mesh>
        </>
    )
}

const Skills = () => {

    return (
        <Section id='skills'>
            <div className='container skills'>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={typescript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={nodejs} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={python} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={git} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={html} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={css} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={react} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={redux} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={material} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={sass} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={mongodb} />
                    </Canvas>
                </div>
            </div>
        </Section>
    )
}


export default Skills;