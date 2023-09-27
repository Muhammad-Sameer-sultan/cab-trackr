import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GolbalStyle'
import Footer from './component/Footer'
import Passanger from './pages/Passanger'
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';





const App=() =>{
  const theme={
    colors:{
      black: "black",
      white: "white",
      primaryYellow: "rgb(253,217,67)",

      bgSecondary: "rgb(253,217,67)",
      gradient: "",
      shadow:"",
    },
    media: { 
      extraLarge: "1200px", large: "992px",medium: "768px",small: "576px"
    }
  }

  return (
    <>
    <ThemeProvider theme={theme }>
      <GlobalStyle/>
    <Navbar />
    {/* <Router> */}
      <Routes>
      <Route path="/home"  key="home" element={<Home/>} />
  <Route path="/passanger" key="passanger" element={<Passanger/>} />
  <Route path="/signin" key="signin" element={<SignIn/>} />
  <Route path="/signup" key="signup" element={<SignUp/>} />
 

      </Routes>
      <Routes></Routes>
    <Footer/>
    {/* </Router> */}
    </ThemeProvider>
         </>
  
  )
}

export default App
