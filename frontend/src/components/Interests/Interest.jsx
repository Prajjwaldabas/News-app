import React from 'react'
import Button from 'react-bootstrap/Button';


import SportsImg from '../../assets/sports.webp'
import EducationImg from '../../assets/education.avif'
import ScienceImg from '../../assets/science.jpg'
import PoliticsImg from '../../assets/politics.jpg'
import healthImg from '../../assets/health.webp'
import businessImg from '../../assets/business.avif'
import foodImg from '../../assets/food.jpeg'
import EntertainmentImg from '../../assets/entertainment.avif'
import './Interest.css'
import MyVerticallyCenteredModal from '../Modal/InterestModal'

const Interest = () => {

        const [modalShow, setModalShow] = React.useState(false);

 

        const Interests = [
                {
                  title: "Sports",
                  image: SportsImg,
                  keywords: ["sports", "athletics", "games", "competitions", "football", "basketball", "baseball", "soccer", "tennis", "golf"],
                },
                {
                  title: "Education",
                  image: EducationImg,
                  keywords: ["education", "learning", "schools", "universities", "teachers", "students", "courses", "online learning", "knowledge", "study"],
                },
                {
                  title: "Science",
                  image: ScienceImg,
                  keywords: ["science", "research", "discoveries", "technology", "physics", "chemistry", "biology", "astronomy", "innovation", "scientists","satellites"],
                },
                {
                  title: "Politics",
                  image: PoliticsImg,
                  keywords: ["politics", "government", "elections", "policies", "democracy", "leadership", "voting", "law", "public affairs", "diplomacy"],
                },
                {
                  title: "Business",
                  image: businessImg,
                  keywords: ["business", "economy", "finance", "entrepreneurship", "startups", "investments", "market", "management", "trade", "commerce"],
                },
                {
                  title: "Entertainment",
                  image: EntertainmentImg,
                  keywords: ["entertainment", "movies", "music", "celebrities", "film", "television", "pop culture", "actors", "artists", "performances"],
                },
                {
                  title: "Food",
                  image: foodImg,
                  keywords: ["food", "cuisine", "recipes", "cooking", "restaurants", "culinary", "dining", "nutrition", "taste", "gastronomy"],
                },
                {
                  title: "Health",
                  image: healthImg,
                  keywords: ["health", "wellness", "medicine", "fitness", "well-being", "medical", "nutrition", "exercise", "mental health", "lifestyle"],
                },
              ];
              


    
  
  return (



    <div className='Interest flex fd-col aic mt-5'>

<div className='shopCat flex jcsb'>
<Button variant="secondary" onClick={() => setModalShow(true)}>
       Chooose Interest
      </Button>



      <MyVerticallyCenteredModal

      data={Interests}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>


 <div className='carouselContainer flex  aic'>
 <div className='cardContainer'>
{Interests.map((card,index)=>{
   return   <div className='carouselCard flex jcc aic' key={index}>

   <img src={card.image} alt={card.title} className='cardImage' />
   <h3>{card.title}</h3>
   
   </div>
  
   

})}
</div>

        </div>





        
    </div>
  )
}

export default Interest