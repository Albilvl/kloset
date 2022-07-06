import React from "react";
import { BiCloset } from "react-icons/bi";
import { Timeline } from "react-twitter-widgets";
import { Button, Divider } from "rsuite";
import data from "../data"

function Home() {
  return (
    <div className="profile">
    <h1>Kloset <BiCloset/> </h1>
    <h3>welcome to the only closet organizer you'll ever need</h3>
    <hr />
    <span className="carousel">
      {data.map(item => <img src = {item.image}/>)}
    </span>
    <hr />
    <img src="http://source.unsplash.com/1600x900/?fashion" style={{height: '100%', width: '100%'}}/>
  </div>
 
  );
}

export default Home;
