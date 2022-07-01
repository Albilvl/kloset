import React from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api"
import data from "../data"


function ProfilePage() {

  const defaultCenter = {
    lat: 29.7604,
    lng: -95.3698,
    };

const mapStyles = {
    height: "100vh",
    width: "100%"
    };

    
  return (
    <div className="profile">
      <h1 className="sneaker-title">Welcome back, User</h1>
      <hr />
      <span className="carousel">
        {data.map(item => <img src = {item.image}/>)}
      </span>
      <hr />
      <img src="http://source.unsplash.com/1600x900/?fashion" style={{height: '100%', width: '100%'}}/>
    </div>
  );
}

export default ProfilePage;
