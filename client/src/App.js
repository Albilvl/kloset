import { useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Closet from "./pages/Closet";
import Grails from "./pages/Grails";
import ProfilePage from "./pages/ProfilePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";

function App() {

  const [toggle, setToggle] = useState(false)

 function darkMode(){
   setToggle(!toggle);
 }
 


  // {backgroundImage: `linear-gradient(135deg, rgb(3,127,255),rgb(225,60,60) )`}
  return (
    <BrowserRouter>
    
    <div
      className="App"
      style={toggle ? ( {backgroundImage: `linear-gradient(135deg, rgba(63, 13, 13, 0.902),rgb(107,95,163)`}) : (
        {backgroundImage: `linear-gradient(135deg, rgb(3,127,255),rgb(225,60,60) )`}
        )}
    >
      <Topbar darkMode={darkMode} />
      <div className="main-container">
        <Routes>
          <Route path= "/profilepage" element={<ProfilePage/>} />
          <Route path= "/closet" element={<Closet/>} />
          <Route path= "/grails" element={<Grails/>} />
          <Route path= "/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
