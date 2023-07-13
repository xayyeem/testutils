// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import Alert from './component/Alert';
import About from './component/About';

// let name = "khalid"

function App() {




  const [mode,setMode]= useState('light');
  

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
      document.title = 'dark mode - textUtils'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.title = 'light mode - textUtils'
    }
  }

  return (
    <>
        <Navbar title = "Text Utils"  mode={mode} toggleMode={toggleMode} ></Navbar>
        {/* <Alert alert={alert}/> */}
        <div className="container">
        <Textform heading = "enter the text to analyze" summ = "enter here" ></Textform>
        </div>
        {/* <About></About> */}
    </>
  );
}

export default App;
