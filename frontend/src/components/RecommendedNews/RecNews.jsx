import Stack from 'react-bootstrap/Stack';
import RecNewsCard from '../RecNewsCard/RecNewsCard';
import { useEffect, useState } from 'react';

function RecNews() {
  const [newsData, setNewsData] = useState([]);

  const apiKey = 'pub_298294797f9b7d7621f0ca9371f0b5c2539b7';
const query = 'technology,covid';
  useEffect(() => {
      
    // const ApiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d84618f1fafd4dccb5d0869cc5e54e70';
    // Fetch news data from the News API
    fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of news articles
        console.log(data.results.reverse())
        setNewsData(data.results);
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
