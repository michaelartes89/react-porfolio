import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";


function Portfolio() {
  return (
    <div>
      <Container>
        
            <h1> Portfolio</h1>
         

       
        <Row>
          <Col size="md-6">
            <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/project1pic.png"}
              name={"Off-The-Menu (JHU group project 1)"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />


         </Col>
         <Col size="md-6">

         <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/stovetop.png"}
              name={"StoveTop (JHU group project 2)"}
              github={<a href="https://github.com/JEmnetu/Stovetop" target="_blank"> View Here</a>}
              deployed={<a href="http://stovetop.herokuapp.com/" target="_blank"> View Here Site</a>}
            />
         </Col>
        </Row>

        <Row>
          <Col size="md-6">
          <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/eatdaburgerpic.png"}
              name={"MySql DB App (JHU class project)"}
              github={<a href="https://github.com/michaelartes89/Eat-Da-Burger" target="_blank"> View Here</a>}
              deployed={<a href="https://safe-waters-34488.herokuapp.com/" target="_blank"> View Here Site</a>}
            />
            </Col>
            <Col size="md-6">
              <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/reactbooksearch.png"}
              name={"React BookSearch (JHU class project)"}
              github={<a href="https://github.com/michaelartes89/react-book-search-" target="_blank"> View Here</a>}
              deployed={<a href="https://react-book-search-zen.herokuapp.com/" target="_blank"> View Here Site</a>}
            />

          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/weatherdashpic.png"}
              name={"Weather App (JHU class project)"}
              github={<a href="https://github.com/michaelartes89/Project-6-WeatherDashboard-" target="_blank"> View Here</a>}
              deployed={<a href="https://michaelartes89.github.io/Project-6-WeatherDashboard-/" target="_blank"> View Here Site</a>}
            />
            </Col>
            <Col size="md-6">
              <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/notetaker.png"}
              name={"Note Taker App (JHU class project)"}
              github={<a href="https://github.com/michaelartes89/Note-Taker-App" target="_blank"> View Here</a>}
              deployed={<a href="https://peaceful-gorge-92743.herokuapp.com/" target="_blank"> View Here Site</a>}
            />

          </Col>
        </Row>

      </Container>


    </div>
  )
}



export default Portfolio;