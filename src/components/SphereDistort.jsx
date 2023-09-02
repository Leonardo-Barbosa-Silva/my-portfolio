import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";


const ShpereDistort = () => {

    return (
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 1, 5]} />
            <Sphere arg={[1, 100, 200]} scale={1.4}>
                <MeshDistortMaterial
                    color="#002233"
                    attach="material"
                    distort={0.6}
                    speed={2}
                />
            </Sphere>
        </Canvas>
    )
}


export default ShpereDistort;