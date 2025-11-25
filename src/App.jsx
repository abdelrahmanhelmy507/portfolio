import { useState , useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import ProfileCardSectoin from './components/ProfileCard/ProfileCardSection'
// import ProfileCard from './components/ProfileCaed/ProfileCard'


function App() {
  
  useEffect(() => {
    window.addEventListener("scroll" , () => {
      if(window.scrollY  > 200){
        setScroll(true)
      }else{
        setScroll(false)
      }
    })
  } , [])
  const [scroll , setScroll] = useState(false)
  return (
    <>
    <div id='up' className="container">
        <Header />
        < Hero /> 
        <div className='devider'></div>
        <ProfileCardSectoin />
        <div className='devider'></div>
        < Main />
        <div className='devider'></div>
        < Contact />
        <div className='devider'></div>
        < Footer />
        
            <a style={{opacity : scroll== true ? 1:0 , transition :" 1s" }} href='#up' className="scorl flex ">
          <button className='icon-arrow-thin-up'></button>
        </a>
          
    </div>
    </>
  )
}

export default App
