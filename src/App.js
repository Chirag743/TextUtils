import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About'
import Alert from './Components/Alert'
import React, { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [text, setText] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
  }

  const toggleMode = ()=>{
      if(mode === 'dark'){
        setMode('light');
        setText('dark');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
      else{
        setMode('dark');
        setText('light');
        document.body.style.backgroundColor = 'gray'
        showAlert("Dark mode has been enabled", "success");
      }
  }

  return (
    <>
    {/* <Navbar/> */}
    <Navbar title="TextUtils" text={text} mode={mode} toggleMode={toggleMode} aboutText="About Textutils"/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}></Route> */}
          {/* <Route path="/" element={<TextForm mode={mode} heading="Enter the text to analyze"/>}></Route> */}
          <TextForm mode={mode} heading="Enter the text to analyze"/>
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
