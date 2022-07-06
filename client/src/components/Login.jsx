import { React, useState } from "react";
import { BiCloset } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Form, Panel } from "rsuite";

function Login(props) {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const userInfo = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.jwt !== undefined) {
          console.log(res.jwt);
          localStorage.token = res.jwt;
          // localStorage.color1 = res.user.color1
          // localStorage.color2 = res.user.color2
          props.setCurrentUser(res.user);
          // props.setColorA(res.user.color1)
          // props.setColorB(res.user.color2)
          navigate("/closet");
        } else {
          alert(res.error);
        }
      });
  }

  return (
    <div className="loginBox">
      <h1>
        KLOSET <BiCloset />{" "}
      </h1>
      <h3>Login</h3>
      <div className="loginContainer">
        <Panel>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control onChange={(e) => setUsername(e)} name="username" />
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
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Submit
                </Button>
                <Button
                  appearance="link"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Don't have an account?
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </div>
    </div>
  );
}

export default Login;
