import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Nav, Navbar, Toggle } from "rsuite";

function Topbar({ darkMode, loggedIn, user, logOut }) {
  let navigate = useNavigate();

  function handlelogOut() {
    logOut();
    navigate("/");
  }

  return (
    <Container>
      <Header>
        <Navbar className="rs-theme-dark">
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            KLOSET
          </Navbar.Brand>
          {loggedIn ? (
            <>
              <Nav>
                <Nav.Item
                  onClick={() => {
                    navigate("/closet");
                  }}
                >
                  Closet
                </Nav.Item>
                <Nav.Item
                  onClick={() => {
                    navigate("/grails");
                  }}
                >
                  Grails
                </Nav.Item>
                <Nav.Item
                  onClick={() => {
                    navigate("/basket");
                  }}
                >
                  Basket
                </Nav.Item>
                <Nav.Item
                  onClick={() => {
                    navigate("/profilepage");
                  }}
                >
                  Profile
                </Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav>
                  <Nav.Item as="h1">
                    <Toggle size="sm" defaultChecked onClick={darkMode} />
                  </Nav.Item>

                  <Nav.Menu title={user.username}>
                    <Nav.Item onClick={() => handlelogOut()}>Log Out</Nav.Item>
                  </Nav.Menu>
                </Nav>
              </Nav>
            </>
          ) : (
            <>
              <Nav pullRight>
                <Nav.Item
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Nav.Item>
              </Nav>
            </>
          )}
        </Navbar>
      </Header>
    </Container>
  );
}

export default Topbar;
