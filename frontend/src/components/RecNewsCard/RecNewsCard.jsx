


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image from '../../assets/sports.webp'
function RecNewsCard({article}) {
  return (
    <CardGroup >
      <Card style={{ width: '24rem' }} >
        <Card.Img variant="top" src={article.urlToImage}  style={{height:"250px"}}/>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
        {article.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
  );
}

export default RecNewsCard;