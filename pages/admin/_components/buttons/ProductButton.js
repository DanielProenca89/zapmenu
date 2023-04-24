import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class ButtonAddProduct extends React.Component{

    constructor(props){
        super(props)
        this.state={
          
        }
 
    }




    render(){
    const disabledSub = this.props.disabledSub
    const disabledAdd = this.props.disabledAdd
    return <Container >
        <Row className={"bt-prod"}>
            <Col className={"bt"}>
                <div onClick = {!disabledSub?this.props.sub:()=>{return}} className={`sub ${disabledSub?"disabled":""}`}>-</div></Col>
                <Col className={"bt"}>
                    <div onClick = {this.props.add} className={`add ${disabledAdd?"disabled":""}`}>+</div></Col>
                    </Row>
                    </Container>
}
}