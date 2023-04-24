import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Workspace from "./_components/workspace";

function Dashboard(){

    return(
        <>
        <Container fluid>
            <Row >

                <div className={"navLeft"}>
                <div className="navHead">
                    ZM
                </div>
                <div className="navLinks">
                <a>Dashboard</a>
                <a>Produtos</a>
                <a>PDV</a>
                <a>Configurações</a>
                </div>
                </div>
     
                <Col>
                <Workspace></Workspace>
                </Col>

            


            </Row>

        </Container>
        </>
    )



}

export default Dashboard;