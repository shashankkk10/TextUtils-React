// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// let name="Shashank";
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
            </Route> */}
            {/* <Route exact path="/about" element={<About/>}>
            </Route> */}
          {/* </Routes> */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
