import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

import { useUser } from '../userContext';


import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../firebase';


const Login = () => {
  const navigate = useNavigate();

  const [formvalues, setformValues] = useState({
    email: "",
    password: "",
  });


  const [ errorMsg , setErrorMsg] = useState("")

  const handleLogin = async (event) => {
    try {
      event.preventDefault()
      const { email, password } = formvalues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message)
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
      console.log(currentUser)
    }
  });

  return (


    <Container  className='flex jcc aic h-100  w-100 gradient-bg'  fluid>
    <Row  className='flex jcc aic h-100 w-100' >
      <Col className='flex jcc aic' style={{height:"100vh",}}>
    <Form style={{width:"400px",}}  className='authForm'  >
<div className='flex jcc aic' >
<h2>Login</h2>
</div>


        
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name='email'  
                onChange={(e) =>
                  setformValues({
                    ...formvalues,
                    [e.target.name]: e.target.value,
                  })
                } />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'       value={formvalues.password}
                onChange={(e) =>
                  setformValues({
                    ...formvalues,
                    [e.target.name]: e.target.value,
                  })
                }/>


        <Form.Text className="text-muted">
         Don't have an account? <Link to="/auth/signup"> Signup Here</Link>
        </Form.Text>
      </Form.Group>

      <b>{errorMsg}</b>
    
      <Button variant="secondary" type="submit"   onClick={handleLogin}>
        Login
      </Button>
    </Form>


    </Col>
    </Row>
  </Container>
  );
}

export default Login