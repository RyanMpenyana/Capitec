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
    height: 30vh;
}
`

const Hero = () => {
    return(
        <> 
         
        <HeroSection>
            
        </HeroSection>
        </>
    )
    }

    export default Hero;