// import Button from 'react-bootstrap/Button';

import './Navbar.css'
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useUser } from '../../userContext'; // Import your UserContext
import React, { useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function NavScrollExample({user}) {

  


  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/auth/login");
  });


  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  


  return (
    <Navbar expand="lg" className="bg-none ">
      <Container fluid>
        {/* <Navbar.Brand href="/"><h4>News App</h4></Navbar.Brand> */}
        {/* <Navbar.Toggle  /> */}
        <Navbar.Collapse id="navbarScroll" fixed="top" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            fixed="top"
          >

      
        
         
            
           
          </Nav>

          </Navbar.Collapse>

      

    
  
          <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="tertiary mb-3 res-Nav ">
          <Container fluid className='nav-cont '>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggleNav' onClick={handleToggle} />

            <Offcanvas
              show={isNavOpen}
              onHide={() => setIsNavOpen(false)}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {/* Your Offcanvas Header */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 resnav">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Saves</Nav.Link>
                  <Nav.Link href="#action2">Profile</Nav.Link>
                  <Nav.Link href="#action2">Logout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>


        
          <DropdownButton id="dropdown-basic"  title={user ? (
    <>
      <AccountCircleIcon  style={{ marginRight: '5px' ,}} />
      {user.displayName}
    </>
  ) : "Account"} style={{ width: "150px" }}>


  
  {user ? (

    <Dropdown.Item onClick={()=>signOut(firebaseAuth)} style={{width:"100px"}}>
      <LogoutIcon  style={{ marginRight: '5px' }} />
      Logout
    </Dropdown.Item>
  ) : (
    
    <>
      <Dropdown.Item>
        <Link to='/auth/login'>Login</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to='/auth/signup'>SignUp</Link>
      </Dropdown.Item>
    </>
  )}
</DropdownButton>
            
         

  

       
       
      </Container>
    
    
    </Navbar>
  );
}

export default NavScrollExample;