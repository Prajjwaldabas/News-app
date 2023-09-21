import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/navbar/Navbar'
import SideNav from '../components/SideNav/SideNav'
import Interest from '../components/Interests/Interest';
import Slider from '../components/Slider/Slider';
import TodayHeadlines from '../components/TodayHeadlines/TodayHeadline';
import RecNews from '../components/RecommendedNews/RecNews';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';








const HomePage = () => {

  const navigate = useNavigate()

 useEffect(()=>{
const token = localStorage.getItem('token')



if(!token){
  navigate('/auth/login')

}
 },[])

  return (
    <Container style={{width:"100%"}} fluid>
    <Row  style={{width:"100%"}}>
    <Col sm={2} ><SideNav/></Col>
    <Col sm={10} ><Navbar/> 
    
    <Row >
      
      <Col><Slider/></Col>
      <Col><Interest/></Col>
      <Col><TodayHeadlines/></Col>
    

    
    </Row>

    <Row> 
        
         <Col><RecNews/></Col>
    
    
    </Row>
    
    </Col>
      


    </Row>
  
  </Container>
  )
}

export default HomePage


