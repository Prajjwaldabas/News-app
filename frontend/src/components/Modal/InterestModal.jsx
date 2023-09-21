import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import { useUser } from '../../userContext';


 function MyVerticallyCenteredModal(props) {
  console.log(props)
    const { setUserInterests } = useUser();
const navigate= useNavigate()
    // const apiUrl = process.env.REACT_APP_BASE_URL;
    const [selectedInterests, setSelectedInterests] = useState([]);

    function handleInterestClick(interest) {
        const updatedInterests = [...selectedInterests];
        const interestIndex = updatedInterests.indexOf(interest);
      
        if (interestIndex === -1) {
          updatedInterests.push(interest);
        } else {
          updatedInterests.splice(interestIndex, 1);
        }
      
        setSelectedInterests(updatedInterests);
        setUserInterests(updatedInterests);
        console.log(updatedInterests)
      
      }



      function handleSubmit() {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage

        console.log("token",token)
      
        // Check if token is present
        if (!token) {
          // Token not found, navigate to the login page
          navigate('/auth/login');
          return; // Prevent the request from being executed
        }
      
        // Define the API URL
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/interest/save`;
      
        // Set up the headers with the token
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token in the headers
        };

        console.log(headers)
      
        // Define the request body
        const requestBody = {
          interest: selectedInterests,
        };
      
        // Make the POST request using Axios
        axios
          .post(apiUrl, requestBody, { headers })
          .then((response) => {
            // Handle the response from the backend if needed
            if (response.status === 200) {

              setUserInterests(selectedInterests);
              localStorage.setItem('userInterests', JSON.stringify(selectedInterests))
              console.log('Request succeeded');
              props.data.onHide()

            } else {
              console.error('Request failed:', response.data);
            }
          })
          .catch((error) => {
            // Handle any errors
            console.error('An error occurred', error);
          });
      }

      
      
      
      
      
      
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Choose your Interest
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='flex jcsa flex-wrap'>
     
        {
          props.data.map((interest, index) => (
            <Button  className={selectedInterests.includes(interest) ? 'bg-dark bg-gradient border-none' : 'bg-success bg-gradient border-none'}    key={index }  onClick={() => handleInterestClick(interest)}>{interest.title} </Button>
          ))
        }
      </Modal.Body>
      <Modal.Footer>
   
        <Button onClick={props.onHide} className='bg-secondary' >Close</Button>
        <Button onClick={handleSubmit} className='bg-secondary' >Save</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MyVerticallyCenteredModal