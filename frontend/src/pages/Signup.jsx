import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';


function Signup() {


    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_BASE_URL;
   


    const [formData,setFormData] = useState({ "firstname":'', "lastname":'',  "email": '', "password": '' , "confirmPassword":''})
const[passNotMatch,setPassNotMatch]=useState(false)

    const handleSubmit= async (event)=>{
       
event.preventDefault()
if(formData.password===formData.confirmPassword){
 

        try {

            console.log(JSON.stringify(formData))
          const response = await fetch(`${apiUrl}/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });


   
          

       


          if (response.status === 200) {
            const data = await response.json();

            if (data.token) {
              // Save the token in local storage
              console.log(data.token)
              localStorage.setItem('token', data.token);
            navigate('/')
            }
          } else {
            const data = await response.json();
            console.error('Request failed:', data);
          }
        } catch (error) {
          console.error('An error occurred', error);
        }

    } 

    else{
        setPassNotMatch(true)
    }


    }

    


    const handleChange= (event)=>{
        setPassNotMatch(false)
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });


    }


  return (

    <Container  className='flex jcc aic h-100 bg-secondary-subtle w-100'  fluid>
    <Row  className='flex jcc aic h-100 w-100' >
      <Col className='flex jcc aic' style={{height:"100vh",}}>
    <Form   style={{width:"400px",}}  onSubmit={handleSubmit} >



<Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="firstname" name='firstname'     value={formData.firstname}  onChange={handleChange}/>
      </Form.Group>

<Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="lastname" name='lastname'     value={formData.lastname}  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">


        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'     value={formData.email}  onChange={handleChange} />
        <Form.Text className="text-muted">
     
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'     value={formData.password}   onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" Confirm Password"  name='confirmPassword'     value={formData.confirmPassword}   onChange={handleChange} />

        <Form.Text className="text-muted">
         Already have an account? <Link to="/auth/login">Login Here</Link>
        </Form.Text>
        
{passNotMatch && <Form.Text className="text-danger">Password Not Matched</Form.Text>}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button variant="secondary" type="submit" >
        Submit
      </Button>


    </Form>


    </Col>
    </Row>
  </Container>
  );
}

export default Signup