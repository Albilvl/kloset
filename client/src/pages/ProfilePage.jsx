import React from "react";
import { Avatar, Form, Divider } from "rsuite";

function ProfilePage({user}) {
  return (
    <div className="profile">
      <h1 >Welcome back, {user.username}</h1>
      <hr />
      <Avatar
        size="lg"
        circle
        src={user.avatar}
        alt={user.username}
      />
      <h3>Your Information:</h3>
      <h5>Top Size: {user.top_size}</h5>
      <h5>Pants Size: {user.pants_size} </h5>
      <h5> Shoe Size: {user.shoe_size}</h5>
      <hr/>
      <Form>


      <Form.Group>
              <Form.ControlLabel>Choose your Colors</Form.ControlLabel>
              <Form.Control
                type="color"
                style={{ width: 50, padding: 0}}
                // onChange={(e) => setColor1(e)}
              />
              <Divider vertical />
              <Form.Control
                type="color"
                style={{ width: 50, padding: 0 }}
                // onChange={(e) => setColor2(e)}
              />
      </Form.Group>
      </Form>
    </div>
  );
}

export default ProfilePage;
