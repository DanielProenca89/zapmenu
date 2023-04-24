import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from "./__components/product";
import Header from "./__components/header"
import Fade from 'react-bootstrap/Fade';
import FloatButton from "./__components/buttons/floatButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMartiniGlassCitrus, faBurger} from '@fortawesome/free-solid-svg-icons'


export default function Home() {


  
  const [sections, setSections] = useState([<FontAwesomeIcon icon={faBurger} />, <FontAwesomeIcon icon={faMartiniGlassCitrus} />])
  const [actual, setActual] = useState(0)


  const lanches=[{name:"X-tudo", valor:"10,50"},{name:"X-Bacon", valor:"5,00"}]
  const bebidas = [{name:"Refrigerante", valor:"11,00"},{name:"Cerveja", valor:"5,00"} ]


  const fetcher = async()=>{
      const response = await fetch('http://localhost:3000/api/products', {method:"POST", body:JSON.stringify([{name:"Refrigerante", valor:11.00},{name:"Cerveja", valor:5.00}])})
      const json = await response.json()
      console.log(json)
  }

  useEffect(()=>{
    fetcher()
  },[])

  return (
    
    <Container>
    <Header title="ZapMenu"/>  

    <div style={{marginTop:"15%"}}></div>
    <Fade in={actual==0} mountOnEnter style={{display:actual==0?"":"none"}}>
      <Row className="justify-content-left" xs={2} md={4} lg={6}>
      {lanches.map(e=><Product name={e.name}></Product>)}
      </Row>
    </Fade>

  <Fade in={actual==1} mountOnEnter style={{display:actual==1?"":"none"}}>
      <Row className="justify-content-left" xs={2} md={4} lg={6}>
      {bebidas.map(e=><Product name={e.name}></Product>)}
      </Row>
    </Fade>

    <FloatButton onClick={()=>setActual(actual + 1)} title={sections[actual + 1]} position="right" display={!sections[actual + 1]?false:true}/>
    <FloatButton onClick={()=>setActual(actual - 1)} title={sections[actual - 1]} position="left" display={actual - 1 < 0?false:true}/>

    </Container>

)
}
