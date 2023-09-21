import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecNewsCard from '../components/RecNewsCard/RecNewsCard';

function Saves() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    
    const fetchSavedArticles = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/articles/saved`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSavedArticles(data.savedArticles); 
        } else {
          console.error('Failed to fetch saved articles:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while fetching saved articles:', error);
      }
    };

    fetchSavedArticles();
  }, []);

  return (
    <Container fluid>
      <Row className='flex  aic  jcc aic'>

     { savedArticles ? (<>   <Col className='flex fd-col jcc aic p-5'>
           
           <h1>Saves</h1> 
             <div className='d-flex  flex-wrap g-3  m-5'>
             {savedArticles.map((article) => (
               <RecNewsCard key={article.id} article={article} />
             ))}
             </div>
           </Col> </>)  :    (<><h1>You haven't saved anything yet!</h1></>)}

      
      </Row>
    </Container>
  );
}

export default Saves;
