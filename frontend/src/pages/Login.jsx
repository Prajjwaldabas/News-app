import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import { useUser } from '../userContext';

function Login() {

  const { setUser } = useUser();
    const navigate = useNavigate();


    const apiUrl = process.env.REACT_APP_BASE_URL;
const [formData,setFormData] = useState({ "email": '', "password": '' })


    const handleSubmit= async (event)=>{
        event.preventDefault();

        try {
          const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    


          if (response.ok) {
       
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            console.log('Request succeeded');
            

            if (data.token) {
              console.log(data.token)
              console.log(data.user)
              setUser(data.user); 
            
            navigate('/')
            }
          } else {
            
            console.error('Request failed');
          }
        } catch (error) {
          console.error('An error occurred', error);
        }

        
    }


    const handleChange= (event)=>{
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });


    }
  return (


    <Container  className='flex jcc aic h-100 bg-secondary-subtle w-100'  fluid>
    <Row  className='flex jcc aic h-100 w-100' >
      <Col className='flex jcc aic' style={{height:"100vh",}}>
    <Form style={{width:"400px",}}   onSubmit={handleSubmit} >


        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name='email'     value={formData.email}  onChange={handleChange} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'     value={formData.password}   onChange={handleChange}/>


        <Form.Text className="text-muted">
         Don't have an account? <Link to="/auth/signup"> Signup Here</Link>
        </Form.Text>
      </Form.Group>
    
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>


    </Col>
    </Row>
  </Container>
  );
}

export default Login