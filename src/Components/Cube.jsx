import { ContactShadows, Environment, MeshWobbleMaterial, OrbitControls, ShadowAlpha } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
const Cube = ({position, scale ,rotate, color, pointLightColor, Ref }) => {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x += 0.01
        ref.current.rotation.y += 0.01
        ref.current.rotation.z += 0.01
    
    })
      
    return(
        
        <mesh ref={ref} scale={scale} rotation={rotate} position={position}>
            <boxGeometry/>
            <directionalLight position={[0, 0 , 2]} />
            {/* <pointLight  color={pointLightColor} position={[0, 0 , 2]}/> */}
            {/* <Environment  preset='sunset' environmentIntensity={.1}  environmentRotation={[-2, 2, 2]} backgroundRotation={[1 , 2 , 1]}/> */}
            <meshStandardMaterial color={color}/>
            {/* <MeshWobbleMaterial color={color}  factor={1} speed={1}/> */}
            <OrbitControls enableZoom={false}/>
        </mesh>
        
    )
}


export default Cube