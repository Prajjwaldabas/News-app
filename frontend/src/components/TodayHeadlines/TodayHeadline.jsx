import Stack from 'react-bootstrap/Stack';
import HeadlineCard from '../HeadlineCard/HeadlineCard'
import { useUser } from '../../userContext'
import { useState,useEffect } from 'react';
import axios from 'axios'

;

function TodayHeadlines({viewType}) {

  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=tesla&from=2023-11-06&sortBy=publishedAt&apiKey=d84618f1fafd4dccb5d0869cc5e54e70'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
  
    fetchData();
  }, [/* dependencies, if any */]);
  
  // useEffect(() => {
  //   // console.log(articles);
  // }, [articles]); // This will log the updated state when it changes

// const token = localStorage.getItem('item')
// console.log(token)

  // const { userInterests,setUserInterests } = useUser();
  // const [filteredNews, setFilteredNews] = useState([]);

  // console.log(userInterests)
  // const ApiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d84618f1fafd4dccb5d0869cc5e54e70';


  const apiKey = 'pub_298294797f9b7d7621f0ca9371f0b5c2539b7';
const query = 'usa';




  // useEffect(() => {
  //   // Fetch news data from the News API
  //   const storedUserInterests = localStorage.getItem('userInterests');
  //   if (storedUserInterests) {
  //     const parsedInterests = JSON.parse(storedUserInterests);
  
  //     // Check if userInterests have changed before updating
  //     if (JSON.stringify(parsedInterests) !== JSON.stringify(userInterests)) {
  //       setUserInterests(parsedInterests); // Update userInterests if it has changed
  //     }
  //   }



  //   fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("data",data.results)
  //     if (userInterests.length === 0 || !token)  {
  //       // If userInterests is empty, set filteredNews to contain all articles
  //       setFilteredNews(data.results);
  //     } else {
  //       // Filter the news data based on user interests
  //       const filteredNews = (data.results || []).filter((article) => {


  //         const articleContent = article.content || '';
  //         const articleTitle = article.title || '';
  //         const articleDescription = article.description || '';
  //         const fullArticleText = `${articleContent} ${articleTitle} ${articleDescription}`;

  //         const isMatch = userInterests.some((interest) =>
  //           fullArticleText.toLowerCase().includes(interest.title.toLowerCase())
  //         );

  //         return isMatch;
  //       });

  //       setFilteredNews(filteredNews);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching news:', error);
  //   });
  // }, [userInterests,setUserInterests]);

  return (
    <Stack direction="horizontal"  className='d-flex  flex-column flex-wrap mt-5' >

<div className='w-100'>
<h4 style={{fontWeight:"700"}}>Today's Headlines</h4>
</div>


<div  className='d-flex  flex-wrap jcsb' >

  {
    articles?.map((article,index)=>{
     
 return <HeadlineCard viewType={viewType} article={article} key={index} index={index}/>

    })
  }

{/* <HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} />
<HeadlineCard viewType={viewType} /> */}

  {/* {filteredNews.map((article,index)=>{

 return <div className="p-2" key={index}><HeadlineCard article={article} /></div>

  })


} */}
     
   
     

      </div>
      
    </Stack>
  );
}

export default TodayHeadlines;