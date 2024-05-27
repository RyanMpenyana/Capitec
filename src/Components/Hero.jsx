import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styled from "styled-components";
import HeadQuarter from '../assets/headquarter.png'

const HeroSection = styled.div`
width: 100%;
height: 100vh;
background-image: url(${HeadQuarter});
background-position: center;
background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
margin-bottom:50px ;

@media only screen and (max-width : 500px){
    margin-bottom : 32px;
    height: 50vh;
}
`

const Hero = () => {
    return(
        <> 
          {/* <img style={{width: '300px', position : 'absolute', zIndex: 1, left : "45%", top : '500px'}} src='../public/capitec-logo.svg'/> */}
        <HeroSection>
            <group rotation={[0 , 0 , 1]} >
            {/* <Cube Ref={true} scale={0.4}  rotate={[1, 1 , 1]} position={[1 , 0, 1]} pointLightColor='purple' color={'red'}/>
            <Cube Ref={true} scale={0.5}  rotate={[1, 1 , 1]} position={[.1 , 1, -1.8]} pointLightColor='red' color={'blue'}/>
            <Cube Ref={false} rotate={[1,3,1]}  position={[0, -1 , 2]} color={'blue'}/>
            <Cube Ref={true} scale={.8} rotate={[1,-1,1]}  position={[-1.1, 1 ,.4]} color={'red'}/> */}
            </group>
        </HeroSection>
        </>
    )
    }

    export default Hero;