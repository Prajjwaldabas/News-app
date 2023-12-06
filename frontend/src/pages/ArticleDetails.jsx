import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/navbar/Navbar";
import SideNav from "../components/SideNav/SideNav";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { useState, useEffect } from "react";
import bankImg from "../assets/bank.jpg";

import { useParams } from 'react-router-dom';
import axios from "axios";


const ArticleDetails = () => {

    const { articleIndex } = useParams();
    const [article, setArticle] = useState(null);

  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser("");
      }
    });

    return () => unsubscribe();
  }, []);


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=tesla&from=2023-11-06&sortBy=publishedAt&apiKey=d84618f1fafd4dccb5d0869cc5e54e70'
        );

        const articles = response.data.articles;

        // Ensure articleIndex is a valid index within the articles array
        if (articleIndex >= 0 && articleIndex < articles.length) {
          setArticle(articles[articleIndex]);
        } else {
          // Handle the case when articleIndex is out of bounds
          console.error('Invalid article index:', articleIndex);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, [articleIndex]);

  if (!article) {
    // Handle the case when article is still loading or not found
    return <div>Loading...</div>;
  }




  return (
    <Container style={{ width: "100%" }} fluid>
      <Row style={{ width: "100%", padding: "0 2rem" }}>
        <Col sm={3}>
          <SideNav />
        </Col>
        <Col sm={9}>
          <Navbar user={user} />

          <Row>
            <div className=" flex jcc aic " style={{marginTop:"-20px",}}>
              
              <h1 className="newsHeading" >THE TIMES OF INDIA</h1>
            </div>


            <div className=" " style={{marginTop:"60px"}}>
              {" "}
              <h2 className="">{article.title}</h2>
            </div>



            <div className="w-100" style={{   height: "450px",}}>
              <img
              src={article.urlToImage}
                alt=""
                className=""
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  margin: "40px 0px",
                }}
              />

             
            </div>

            <div  style={{ margin: "70px 0px",}}>
            <p style={{lineHeight:"30px" ,wordSpacing:"2px"}}>
                {article.description}
              </p>
            </div>

            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
