import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged,updateProfile } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
    password: ""
  });

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      const { email, password, displayName } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);

      // Optionally, update the user's display name
      await updateProfile(firebaseAuth.currentUser, { displayName });

    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  return (
    <Container className='flex jcc aic h-100  w-100 gradient-bg' fluid>
      <Row className='flex jcc aic h-100 w-100'>
        <Col className='flex jcc aic' style={{ height: "100vh" }}>
          <Form style={{ width: "400px" }} className='authForm'  >
<div className='flex jcc aic'>
<h2>Sign Up</h2> 
</div>
        
            <Form.Group className="mb-3 mb-5" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="displayName"
                value={formValues.displayName}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                  })
                }
              />
            </Form.Group>

            <Button variant="secondary" type="submit" onClick={handleSignup}  >
              Sign In
            </Button>

            <Form.Text className="text-muted">
              Already have an account? <Link to="/auth/login">Login Here</Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
