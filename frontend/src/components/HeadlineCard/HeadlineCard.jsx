
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useEffect, useState } from 'react';

function BasicExample({ article }) {
  const [token, setToken] = useState(false);
  const [save, setSave] = useState(true);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const Token = localStorage.getItem('token');
    console.log(Token)

    if (Token) {
      setToken(true);
    }
  }, []);

  const saveArticle = async () => {
    console.log(process.env.REACT_APP_BASE_URL);

    setSave(false);
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/articles/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ article }),
      });

      if (response.ok) {
        setSave(false);
      } else {
        console.error('Failed to save article:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while saving the article:', error);
    }
  };

  const removeArticle = async () => {
    setSave(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/articles/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ article }),
      });

      if (response.ok) {
        setSave(true);
      } else {
        console.error('Failed to remove article:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while removing the article:', error);
    }
  };

  return (
    <Card style={{ width: '24rem', padding: '0 10px', position: 'relative' }} className='flex fd-row aic jcc'>
      <Card.Img variant='' src={article.urlToImage} style={{ width: '80px', height: '80px' }} />
      <Card.Body>
        <p className='fwb'>{article.title}</p>
        <Card.Text></Card.Text>
        <Link variant='primary' href={article.url}>
          Read More
        </Link>
      </Card.Body>
      {token && (
        <>
          <button
            style={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={saveArticle}
            className={save ? 'd-flex' : 'd-none'}
          >
            <BookmarkBorderIcon />
          </button>
          <button
            style={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={removeArticle}
            className={save ? 'd-none' : ' d-flex'}
          >
            <BookmarkIcon />
          </button>
        </>
      )}
    </Card>
  );
}

export default BasicExample;
