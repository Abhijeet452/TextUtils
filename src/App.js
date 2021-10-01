import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "rgb(9 30 50)";
      document.body.style.color = "White";
      showAlert('Dark Mode has been enabled', "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "White";
      document.body.style.color = "rgb(9 30 50)";
      showAlert('Light Mode has been enabled', "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar about="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="TextUtils-Manipulate your text in any way you want to :)" mode={mode} showAlert={showAlert}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
