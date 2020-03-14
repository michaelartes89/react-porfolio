import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Image from 'react-bootstrap/Image'



function About() {
  return (
    <div>
      
      <Container>
  


      <Image src="https://avatars3.githubusercontent.com/u/55673884?s=460&u=0399db1654b3b0a11d3186bee23ffc3a532a682c&v=4" fluid roundedCircle />
      

      

    
     
     
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p><strong>Michael Artes </strong> is an up and coming web developer, currently working in Baltimore, Maryland.
          Michael is a member of the inaugural Full-Stack Bootcamp at Johns Hopkins University. A native of the
          Baltimore area, Michael earned a Bachelor of Arts Degree in Government and
          Politics from the University of Maryland, College Park in 2011, after graduating from Loyola Blakefield High
          School in 2007. As an adult, he has spent significant time living and working in multiple distinct communities
          of the United States including: Washington DC, Denver, Colorado and Portland, Oregon. His career
          experience includes grassroots non-profits and major national corporations. Michael considers his greatest
          achievement in life to be getting married to his beautiful wife, Casille, and taking care of their two adopted
          children, Summer and Nymeria. </p>
        <p>Michael is experienced in developing static pages and complex web applications. He is also a highly skilled
          project manager.
          Michael brings dedication, professionalism, and positive energy to all aspects of his work. He can also always
          be counted on to deliver well-timed,
          humorous observations on a wide range of subject matter.
        </p>
          </Col>
        </Row>
        <Row>
            <Col size="md-12">
            <a href="https://github.com/michaelartes89" target="_blank"> <i
                  class="fab fa-github size fa-7x "></i></a> 
             <a href="https://www.linkedin.com/in/michael-artes-1380a819a/" target="_blank"><i
                  class="fab fa-linkedin fa-7x"></i></a>
             <a href="https://michaelartes89.github.io/Model-Portfolio/assets/Resume2020.pdf" target="_blank"><i class="fas fa-file fa-7x"></i></a> 
            </Col>

        </Row>
        
      
      </Container>
    </div>
  );
}

export default About;
