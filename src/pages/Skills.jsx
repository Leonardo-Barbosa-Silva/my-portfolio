import { Canvas } from '@react-three/fiber';
import {
    Decal,
    OrbitControls,
    useTexture
} from '@react-three/drei';
import styled from 'styled-components';
import javascript from '../img/javascript.png'


const Section = styled.section`
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
`

const Ball = ({ icon }) => {

    console.log(icon)

    const [ decal ] = useTexture([ icon ])

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 0, 5]} />
            <mesh castShadow receiveShadow scale={1}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#0099ff'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.5}
                    map={decal}
                    flatShading
                />
            </mesh>
        </>
    )
}

const Skills = () => {

    return (
        <Section id='#skills'>
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
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
                <div className='skill'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={javascript} />
                    </Canvas>
                </div>
            </div>
        </Section>
    )
}


export default Skills;