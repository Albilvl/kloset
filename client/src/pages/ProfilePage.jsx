import React from "react";
import { Avatar } from "rsuite";

function ProfilePage({user}) {
  return (
    <div className="profile">
      <h1 >Welcome back, {user.username}</h1>
      <hr />
      <Avatar
        size="lg"
        circle
        src="https://avatars.githubusercontent.com/u/12592949"
        alt="@SevenOutman"
      />
      <h3>Your Information:</h3>
      <h5>Top Size: {user.top_size}</h5>
      <h5>Pants Size: {user.pants_size} </h5>
      <h5> Shoe Size: {user.shoe_size}</h5>
    </div>
  );
}

export default ProfilePage;
