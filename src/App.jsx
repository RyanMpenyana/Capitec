import Navbar from './Components/Nav'
import './App.css'
import Hero from './Components/Hero'
import { Center } from './Components/Containers'
import About from './Components/About'
import { BlogSection } from './Components/BlogSection'
import { Footer } from './Components/Footer'





const App = () => {


  return (
    <>
     <Navbar/>
     <Hero/>
    <Center>
     <About/>
     <BlogSection/>
    </Center>
    <Footer/>
    </>
  )
}



export default App