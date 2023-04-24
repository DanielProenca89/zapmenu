import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import EditProduct from "./editProduct";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import  Button  from 'react-bootstrap/Button';

class Workspace extends React.Component{

    constructor(props){
        super(props)
        this.state={
            key:"lanches"
        }
    }

    render(){

        return <div>
            <Row>
            <Tabs
      id="controlled-tab-example"
      activeKey={this.state.key}
      onSelect={(k) => this.setState({key:k})}
      className="mb-3"
    >
        <Tab eventKey="lanches" title="Lanches">
            <Row>
        <Button>Adicionar</Button>
                <EditProduct/>
                <EditProduct/>
                <EditProduct/>
                </Row>
        </Tab>

        <Tab eventKey="bebidas" title="Bebidas">
                <EditProduct/>
               
        </Tab>
    
    
    </Tabs>
            </Row>
        </div>
    }
}

export default Workspace