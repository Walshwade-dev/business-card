// import logo from './logo.svg';
import { useState } from 'react';

/* ====> Particles rendering section imports start <==== */
import { useCallback } from 'react';
import Particles from "react-particles"
import {loadFull} from "tsparticles"
import particlesOptions from "./particles.json";

/* ====> Particles rendering section imports end <==== */

/* ====> React components rendering section start <==== */
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer'
/* ====> React components rendering section end<==== */

import './App.css';


function App() {
  
  const [darkMode, setDarkMode] = useState(true)

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  function toggle() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <>
      <div className="App">
        <Nav
          darkMode = {darkMode}
          handleClick = {toggle}
         />
        <Main
          darkMode = {darkMode}
         />
        <Footer
          darkMode = {darkMode}
         />
      </div>
      <Particles options={particlesOptions} init={particlesInit} />
    </>
  );
}

export default App;
