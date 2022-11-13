import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,Routes,
  
} from "react-router-dom";


function App() {
  // const search = (e)=> {                                                               //this didnt work
  //   let searched = document.getElementById("search").value;
  //   if (searched !== "") {
  //     let text = document.getElementById("myBox").innerHTML;
  //     let re = new RegExp(searched,"g"); // search for all instances
  //     let newText = text.replace(re, `<mark>${searched}</mark>`);
  //     document.getElementById("text").innerHTML = newText;
  //   }
  // }

  const [mode, setMode] = useState('light');    // whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#253644';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils Now";
      // },1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-LightMode';
    }
  }
  return (
    <>
    <Router>

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analayze below" mode={mode} />} >
           </Route> 
         </Routes> 

      </div>
    </Router>

    </>
  );
}

export default App;