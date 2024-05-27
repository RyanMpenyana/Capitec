import Navbar from './Components/Nav'
import './App.css'
import Hero from './Components/Hero'
import { Center } from './Components/Containers'
import About from './Components/About'
import { BlogSection } from './Components/BlogSection'
import { Footer } from './Components/Footer'
import Header from './header'
import Title from './Components/Title'





const App = () => {


  return (
    <>
    <Header/>
     <Hero/>
     {/* <Title/> */}
    <Center>
     <About/>
     <BlogSection/>
    </Center>
    <Footer/>
    </>
  )
}



export default App