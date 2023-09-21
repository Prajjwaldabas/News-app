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
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

function NavScrollExample() {

  const {user, setUser } = useUser();

  useEffect(() => {
 
    const token = localStorage.getItem('token');
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

    if (token && userFromLocalStorage) {
      setUser(userFromLocalStorage);
      console.log(userFromLocalStorage)
      console.log()
    }
  }, []);

  console.log(user)



  
  return (
    <Navbar expand="lg" className="bg-none">
      <Container fluid>
        <Navbar.Brand href="/"><h4>News App</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" fixed="top" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            fixed="top"
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
         
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>

        
          <DropdownButton id="dropdown-basic" title= {user? user.firstname : "Account"} style={{width:"150px"
          }}>
         
      <Dropdown.Item href="#"></Dropdown.Item>
      <Dropdown.Item href="/auth/login">Login</Dropdown.Item>
      <Dropdown.Item href="/auth/signup">Sign Up </Dropdown.Item>
    
    </DropdownButton>
            
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

  

       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;