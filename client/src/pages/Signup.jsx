import { React, useState } from "react";
import { BiCloset } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Divider, Form, Panel } from "rsuite";

function Signup() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [top_size, setTop_size] = useState("");
  const [pants_size, setPants_size] = useState("");
  const [shoe_size, setShoe_size] = useState("");
  const [avatar, setAvatar] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  function handleSubmit() {

    setTop_size('M');
    setPants_size("32");
    setShoe_size('9')

    const newUser = {
      username,
      email,
      password,
      top_size,
      pants_size,
      shoe_size,
      avatar,
      color1,
      color2,
    };

    console.log("hi");
    fetch("/newaccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.errors !== undefined) {
          let msg = "";
          console.log(response.errors);
          response.errors.map((error) => {
            msg += error + "\n";
          });
          alert(msg);
        } else {
          console.log(response);
          alert("Account Created!");
          navigate("/login");
        }
      });
  }

  return (
    <div className="loginBox">
      <h1>
        KLOSET <BiCloset />{" "}
      </h1>
      <h3>sign up</h3>
      {/* <FlexboxGrid align="middle" justify="center">
        <FlexboxGrid.Item colspan={12}> */}
      <div className="loginContainer">
        <Panel>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control onChange={(e) => setUsername(e)} name="username" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control onChange={(e) => setEmail(e)} name="email" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                onChange={(e) => setPassword(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Avatar</Form.ControlLabel>
              <Form.Control name="avatar" onChange={(e) => setAvatar(e)} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Choose your Colors</Form.ControlLabel>
              <Form.Control
                type="color"
                style={{ width: 50, padding: 0}}
                onChange={(e) => setColor1(e)}
              />
              <Divider vertical />
              <Form.Control
                type="color"
                style={{ width: 50, padding: 0 }}
                onChange={(e) => setColor2(e)}
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
                <Button
                  appearance="link"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Already have account?
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </div>
    </div>
  );
}

export default Signup;
