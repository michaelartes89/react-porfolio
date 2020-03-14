import React from "react";
import Container from "../components/Container";
import Row from"../components/Row"
import Col from "../components/Col"

const styles= {
    textAlighn: {
        textAlighn:"center"

    }
}

function Contact() {
    return (
        <div>
            <Container>
            <h1>Contact Michael</h1>
            <Row>
                <Col size="md-12">
            
            <p style = {styles.textAlighn}> 
          Michael consults for businesses and individuals in need of creative solutions for web projects 
           <a href="mailto:artes.mike@gmail.com" target="_top"> Click Here to Contact Michael  </a> 
          
           or send an email to artes.mike@gmail.com with WEB CONSULTATION in your subject line :)
        </p>
        </Col>
        </Row>
        </Container>

        </div>
    )
}

export default Contact;