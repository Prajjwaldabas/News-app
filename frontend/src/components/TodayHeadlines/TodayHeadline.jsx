import Stack from 'react-bootstrap/Stack';
import HeadlineCard from '../HeadlineCard/HeadlineCard'
import { useUser } from '../../userContext'
import { useState,useEffect } from 'react';

function TodayHeadlines() {

const token = localStorage.getItem('item')
console.log(token)

  const { userInterests,setUserInterests } = useUser();
  const [filteredNews, setFilteredNews] = useState([]);

  console.log(userInterests)
  const ApiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d84618f1fafd4dccb5d0869cc5e54e70';

  useEffect(() => {
    // Fetch news data from the News API
    const storedUserInterests = localStorage.getItem('userInterests');
    if (storedUserInterests) {
      const parsedInterests = JSON.parse(storedUserInterests);
  
      // Check if userInterests have changed before updating
      if (JSON.stringify(parsedInterests) !== JSON.stringify(userInterests)) {
        setUserInterests(parsedInterests); // Update userInterests if it has changed
      }
    }



    fetch(ApiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (userInterests.length === 0 || !token)  {
        // If userInterests is empty, set filteredNews to contain all articles
        setFilteredNews(data.articles);
      } else {
        // Filter the news data based on user interests
        const filteredNews = data.articles.filter((article) => {
          const articleContent = article.content || '';
          const articleTitle = article.title || '';
          const articleDescription = article.description || '';
          const fullArticleText = `${articleContent} ${articleTitle} ${articleDescription}`;

          const isMatch = userInterests.some((interest) =>
            fullArticleText.toLowerCase().includes(interest.title.toLowerCase())
          );

          return isMatch;
        });

        setFilteredNews(filteredNews);
      }
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
    });
  }, [userInterests,setUserInterests]);

  return (
    <Stack direction="horizontal" gap={3} className='d-flex  flex-column flex-wrap mt-5' >

<div className='w-100'>
<h4 style={{fontWeight:"700"}}>Today's Headlines</h4>
</div>


<div gap={3} className='d-flex  flex-wrap' >

  {filteredNews.map((article,index)=>{

 return <div className="p-2" key={index}><HeadlineCard article={article} /></div>

  })


}
     
   
     

      </div>
      
    </Stack>
  );
}

export default TodayHeadlines;