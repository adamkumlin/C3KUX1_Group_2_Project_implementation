import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import earthIcon from "../images/earth-icon.svg";
import { Link } from "react-router-dom";
import Padlock from "../images/padlock.png";

/* This component uses a default navbar from the react-bootrstap library 
   subjects is a prop which is used to establish the paths which the links should navigate to.
*/
function NavBar({ subjects }) {
  const expand = false;
  return (
    <>
      <Navbar expand={expand} className="navBar m-0">
        <Container className="navBar-container" fluid>
          <Navbar.Brand className="navBar" href="/overview">
            <div className="navBarLogo">
              <img src={earthIcon} />
            </div>
            KLIMATUTMANINGEN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Klimatutamningen
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <b>Logga ut</b>
                </Nav.Link>
                <Nav.Link href="#action2">Hem</Nav.Link>
                <Nav.Link href="#action2">Minska klimatpåverkan</Nav.Link>

                <NavDropdown
                  title="Utmaningen"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to="/subjects/video">
                    Klimatet (video)
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/subjects/fossilabranslen/1">
                    <div className="dropdownContents">
                      <p className={subjects[1].open ? "unlocked" : "locked"}>
                        Fossila bränslen
                      </p>
                      {subjects[1]?.open ? undefined : (
                        <img className="padlock" src={Padlock} alt="" />
                      )}
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="locked-text"
                    as={Link}
                    to="/subjects/glaciarer/1"
                  >
                    <div className="dropdownContents">
                      <p className={subjects[2].open ? "unlocked" : "locked"}>
                        Glaciärer
                      </p>
                      {subjects[2]?.open ? undefined : (
                        <img className="padlock" src={Padlock} alt="" />
                      )}
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <div className="dropdownContents">
                      <p className={subjects[3].open ? "unlocked" : "locked"}>
                        Globala temperaturer
                      </p>
                      {subjects[3]?.open ? undefined : (
                        <img className="padlock" src={Padlock} alt="" />
                      )}
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <div className="dropdownContents">
                      <p className={subjects[4].open ? "unlocked" : "locked"}>
                        Havsnivåer
                      </p>
                      <img className="padlock" src={Padlock} alt="" />
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <div className="dropdownContents">
                      <p className={subjects[5].open ? "unlocked" : "locked"}>
                        {" "}
                        Tips på mer info
                      </p>
                      <img className="padlock" src={Padlock} alt="" />
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <div className="dropdownContents">
                      <p className={subjects[6].open ? "unlocked" : "locked"}>
                        {" "}
                        Spel
                      </p>
                      <img className="padlock" src={Padlock} alt="" />
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="#action2">Webboard / Forum</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
