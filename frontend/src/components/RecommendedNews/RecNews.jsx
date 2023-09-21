import Stack from 'react-bootstrap/Stack';
import RecNewsCard from '../RecNewsCard/RecNewsCard';
import { useEffect, useState } from 'react';

function RecNews() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
      
    const ApiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d84618f1fafd4dccb5d0869cc5e54e70';
    // Fetch news data from the News API
    fetch(ApiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of news articles
        setNewsData(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <Stack direction="horizontal" gap={3} className='d-flex  flex-column flex-wrap mt-5'>
      <div className='w-100'>
        <h4 style={{ fontWeight: "700" }}>Recommended News</h4>
      </div>
      <div className='d-flex  flex-wrap g-1 w-100'>
        {newsData.map((article, index) => (
          <div className="p-2" key={index}>
            <RecNewsCard article={article} />
          </div>
        ))}
      </div>
    </Stack>
  );
}

export default RecNews;
