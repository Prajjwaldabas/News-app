import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/navbar/Navbar';
import SideNav from '../components/SideNav/SideNav';
import TodayHeadlines from '../components/TodayHeadlines/TodayHeadline';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [viewType, setViewType] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(''); // Set user to an empty string when not authenticated
      }
    });

    return () => unsubscribe();
  }, []); // Run only once when component mounts

  return (
    <Container style={{ width: "100%" }} fluid>
      <Row style={{ width: "100%"  ,padding:"0 2rem"}}>
        <Col sm={3}><SideNav /></Col>
        <Col sm={9}>
          <Navbar user={user} />


          

          <Row>
            {/* <Button  className='ViewBtn' onClick={() => setViewType(!viewType)}>
              {viewType ? " List  View" : "  Grid View"}
            </Button> */}
<div className='flex jcc aic'>  <h1 className='newsHeading'>THE TIMES OF INDIA</h1></div>

          


 
  



            <Col>
            
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='viewType flex'>
      View Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setViewType(true)}>List</Dropdown.Item>
        <Dropdown.Item  onClick={() => setViewType(false)}> Grid</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <TodayHeadlines viewType={viewType}   />
          
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
