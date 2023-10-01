import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";


const ShpereDistort = ({ isNonMobileScreen }) => {

    return (
        <>
            {isNonMobileScreen && (
                <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={2}/>
                    <directionalLight position={[3, 1, 5]} />
                    <Sphere arg={[1, 100, 200]} scale={1.25}>
                        <MeshDistortMaterial
                            color="#002233"
                            attach="material"
                            distort={0.7}
                            speed={2}
                        />
                    </Sphere>
                </Canvas>
            )}

            {!isNonMobileScreen && (
                <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={2}/>
                    <directionalLight position={[3, 1, 5]} />
                    <Sphere arg={[1, 100, 200]} scale={0.9}>
                        <MeshDistortMaterial
                            color="#002233"
                            attach="material"
                            distort={0.7}
                            speed={1.7}
                        />
                    </Sphere>
                </Canvas>
            )}
        </>
    )
}


export default ShpereDistort;