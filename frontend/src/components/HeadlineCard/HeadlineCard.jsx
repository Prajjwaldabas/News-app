import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useEffect, useState } from 'react';
import { checkIfArticleIsSaved, saveArticleInFirebase, removeArticleFromFirebase } from '../../firebase';

function HeadlineCard({ article, viewType, index }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
  
    checkSavedStatus();
  }, []);

  const checkSavedStatus = async () => {
    const savedStatus = await checkIfArticleIsSaved(index);
    setIsSaved(savedStatus);
  };

  const saveArticle = async (e) => {
    e.stopPropagation();
    await saveArticleInFirebase(index);
    setIsSaved(true);
  };
  
  const removeArticle = async (e) => {
    e.stopPropagation();
    await removeArticleFromFirebase(index);
    setIsSaved(false);
  };

  return (
   
      <Card
        style={{
          
          width: !viewType ? '20rem' : '30rem',
          padding: '0 10px',
          height: !viewType ? '400px' : '150px',
          overflow: 'hidden',
          marginTop: '3rem',
          position: 'relative',
          flexDirection: !viewType ? 'column' : 'row',
        }}
        className='flex aic jcsb'
      >
        
        <div style={{ height: !viewType ? '40%' : '80px' }}>
        <Link to={`/details/${index}`} className='text-decoration-none'>
          <Card.Img
            variant=''
            src={article.urlToImage}
            style={{
              width: !viewType ? '20rem' : '80px',
              height: !viewType ? '100%' : '80px',
              backgroundSize: 'cover',
            
            }}
          />
             </Link>
        </div>
     
       
        <Card.Body>
          <p className='fwb'>{article.title}</p>
          {!viewType && (
            <Card.Text className='desc-text'>
              {article?.description?.split(' ').slice(0, 12).join(' ')}...
            </Card.Text>
          )}

          <Link variant='primary' to={`/details/${index}`}>
            Read More
          </Link>
        </Card.Body>
    

        <>
        <button
  style={{ position: 'absolute', bottom: '0px', right: '0px', zIndex: "9999" }}
  onClick={(e) => (isSaved ? removeArticle(e) : saveArticle(e))}
  className={isSaved ? 'd-flex' : 'd-none'}
>
  <BookmarkBorderIcon />
</button>
<button
  style={{ position: 'absolute', bottom: '0px', right: '0px', zIndex: "9999" }}
  onClick={saveArticle}
  className={isSaved ? 'd-none' : 'd-flex'}
>
  <BookmarkIcon />
</button>
        </>
      </Card>
  
     
  );
}

export default HeadlineCard;
