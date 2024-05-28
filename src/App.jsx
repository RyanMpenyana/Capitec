import Navbar from './Components/Nav'
import './App.css'
import Hero from './Components/Hero'
import { Center } from './Components/Containers'
import About from './Components/About'
import { BlogSection } from './Components/BlogSection'
import { Footer } from './Components/Footer'
import Header from './header'
import Title from './Components/Title'
import { useEffect, useState } from 'react'





const App = () => {
    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize',  () => {
            setWidth(window.innerWidth)
        })
        return() => {
            window.removeEventListener('resize', window)
        }
    })

  return (
    <>
    <Header/>
     <Hero/>
    {width <= 1024 && <Title/>}
     <Center>
     <About/>
     <BlogSection/>
    </Center>
    <Footer/>
    </>
  )
}



export default App