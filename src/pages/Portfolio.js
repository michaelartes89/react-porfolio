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
              name={"Off-The-Menu (protype web app"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />


         </Col>
         <Col size="md-6">

         <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/stovetop.png"}
              name={"Off-The-Menu (protype web app"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />
         </Col>
        </Row>

        <Row>
          <Col size="md-6">
          <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/eatdaburgerpic.png"}
              name={"Off-The-Menu (protype web app"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />
            </Col>
            <Col size="md-6">
              <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/dayplannerpic.png"}
              name={"Off-The-Menu <br /> (protype web app"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />

          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/weatherdashpic.png"}
              name={"Off-The-Menu (protype web app"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />
            </Col>
            <Col size="md-6">
              <Card
              image={"https://michaelartes89.github.io/Model-Portfolio/assets/images/notetaker.png"}
              name={"Off-The-Menu (protype web app"}
              github={<a href="https://github.com/JonoAugustine/off-the-menu" target="_blank"> View Here</a>}
              deployed={<a href="https://jonoaugustine.github.io/off-the-menu/" target="_blank"> View Here Site</a>}
            />

          </Col>
        </Row>

      </Container>


    </div>
  )
}



export default Portfolio;