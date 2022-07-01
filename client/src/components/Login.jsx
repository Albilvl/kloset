import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Divider, Form, Panel } from "rsuite";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="loginBox">
        <h1>KLOSET</h1>
        <h3>sign up</h3>
      {/* <FlexboxGrid align="middle" justify="center">
        <FlexboxGrid.Item colspan={12}> */}
      <div className="loginContainer">
        <Panel >
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control
                //   onChange={(e) => setUsername(e)}
                name="username"
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
              // onChange={(e) => setEmail(e)} name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                //   onChange={(e) => setPassword(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Choose your Colors</Form.ControlLabel>
              <input type="color" id="head" name="head" /> 
              <Divider vertical />
              <input type="color" id="head" name="head" /> 
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  onClick={() => {
                    //   handleSubmit();
                  }}
                >
                  Submit
                </Button>
                <Button
                  appearance="link"
                  onClick={() => {
                    //   navigate("/login");
                  }}
                >
                  Already have account?
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </div>
      {/* </FlexboxGrid.Item>
      </FlexboxGrid> */}
    </div>
  );
}

export default Login;
