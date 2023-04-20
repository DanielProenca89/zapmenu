import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from "./__components/product";

export default function Home() {

  
  const data=[{name:"X-tudo", valor:"10,00"},{name:"X-Bacon", valor:"5,00"}]

  return (
    <Container>
      
      <Row className="justify-content-left" xs={2} md={4} lg={6}>
      {data.map(e=><Product name={e.name}></Product>)}
      </Row>
    </Container>
  )
}
