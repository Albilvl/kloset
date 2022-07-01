import React from "react";
import {useNavigate} from 'react-router-dom';
import { Container, Dropdown, Header, Nav, Navbar, Toggle, Content } from "rsuite";

function Topbar({darkMode}) {
  let navigate = useNavigate()
  
  return (
    <Container>
      <Header>
        <Navbar className="rs-theme-dark">
          <Navbar.Brand
            onClick={() => {
              // navigate("/");
            }}
          >
            KLOSET
          </Navbar.Brand>

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
                    navigate("/login");
                }}
              >
                News
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
                <Nav.Item as= "h1">

                  <Toggle size="sm" defaultChecked  onClick={darkMode}/>
                </Nav.Item>
              
                <Nav.Menu title="USER">
                  <Nav.Item
                  >
                    Edit Profile
                  </Nav.Item>
                  <Nav.Item
                  // onClick={() => handlelogOut()}
                  >
                    Log Out
                  </Nav.Item>
                </Nav.Menu>
              </Nav>
            </Nav>
          </>
        </Navbar>
        {/* <Modal
                  open={show}
                  onClose={handleClose}
                  >
                  <Modal.Header closeButton>
                      <Modal.Title>Your Cart</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Cart 
                      // userData={userData}
                      // cartItem={cartItem}
                      // setCartItem={setCartItem}
                  />
                  </Modal.Body>
                  <Modal.Footer>
                      <Button onClick={() => alert("Get your money up not your funny up!")} >Checkout</Button>
                  </Modal.Footer>
              </Modal>   */}
      </Header>
    </Container>
  );
}

export default Topbar;
