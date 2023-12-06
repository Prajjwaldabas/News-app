import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecNewsCard from '../components/RecNewsCard/RecNewsCard';
import { getSavedArticlesFromFirebase } from '../firebase';

function Saves() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Call the function to get saved articles from Firebase
    getSavedArticlesFromFirebase(setSavedArticles);
  }, []);

  return (
    <Container fluid>
      <Row className='flex aic jcc aic'>
        {savedArticles.length > 0 ? (
          <Col className='flex fd-col jcc aic p-5'>
            <h1>Saves</h1>
            <div className='d-flex flex-wrap g-3 m-5'>
              {savedArticles.map((article) => (
                <RecNewsCard key={article.id} article={article} />
              ))}
            </div>
          </Col>
        ) : (
          <><h1>You haven't saved anything yet!</h1></>
        )}
      </Row>
    </Container>
  );
}

export default Saves;
