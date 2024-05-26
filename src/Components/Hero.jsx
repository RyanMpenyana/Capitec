import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import Input from "./Input";

const Hero = () => {
    return(
        <>  
        {/* <Input/> */}
          <img style={{width: '300px', position : 'absolute', zIndex: 1, left : "45%", top : '500px'}} src='../public/capitec-logo.svg'/>
        <Canvas>
            <group rotation={[0 , 0 , 1]} >
            <Cube Ref={true} scale={0.4}  rotate={[1, 1 , 1]} position={[1 , 0, 1]} pointLightColor='purple' color={'red'}/>
            <Cube Ref={true} scale={0.5}  rotate={[1, 1 , 1]} position={[.1 , 1, -1.8]} pointLightColor='red' color={'blue'}/>
            <Cube Ref={false} rotate={[1,3,1]}  position={[0, -1 , 2]} color={'blue'}/>
            <Cube Ref={true} scale={.8} rotate={[1,-1,1]}  position={[-1.1, 1 ,.4]} color={'red'}/>
            </group>
        </Canvas>
        </>
    )
    }

    export default Hero;