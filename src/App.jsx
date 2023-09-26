import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GolbalStyle'
import Footer from './component/Footer'
import Passanger from './pages/Passanger'





const App=() =>{
  const theme={
    colors:{
      black: "black",
      white: "white",
      primaryYellow: "rgb(253,217,67)",

      bgSecondary: "rgb(253,217,67)",
      gradient: "",
      shadow:"",
      media: { 
        mobile: "768px", tab: "998px"
      }


    }
  }

  return (
    <>
    
    <ThemeProvider theme={theme }>
      <GlobalStyle/>
    <Navbar />
    <Home  />
    <Passanger/>
    <Footer/>
    </ThemeProvider>
         </>
  
  )
}

export default App
