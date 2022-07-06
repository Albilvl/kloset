import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Topbar from "./components/Topbar";
import Closet from "./pages/Closet";
import Errorpage from "./pages/Errorpage";
import Grails from "./pages/Grails";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Signup from "./pages/Signup";

function App() {
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [colorA, setColorA] = useState("rgb(3,127,255)");
  const [colorB, setColorB] = useState("rgb(225,60,60)");

  function darkMode() {
    setToggle(!toggle);
  }

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  useEffect(() => {
    const token = localStorage.token;
    if (
      typeof token !== "undefined" &&
      token.length > 1 &&
      token !== "undefined"
    ) {
      fetch("/auto_login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log("No token found, try logging in!");
    }
  }, []);

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
  }

  

  // {backgroundImage: `linear-gradient(135deg, rgb(3,127,255),rgb(3,127,255) )`}
  return (
    <BrowserRouter>
      <div
        className="App"
        style={
          toggle
            ? {
                backgroundImage: `linear-gradient(135deg, rgba(63, 13, 13, 0.902),rgb(107,95,163)`,
              }
            : {
                backgroundImage: `linear-gradient(135deg, ${colorA}, ${colorB} )`,
              }
        }
      >
        <Topbar
          darkMode={darkMode}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          user={user}
          logOut={logOut}
        />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profilepage" element={<ProfilePage user={user} />} />
            <Route path="/closet" element={<Closet user={user} />} />
            <Route path="/grails" element={<Grails />} />
            <Route
              path="/login"
              element={<Login setCurrentUser={setCurrentUser} setColorB={setColorB} setColorA={setColorA}/>}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
