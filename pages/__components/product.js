import React from 'react'
import Col from 'react-bootstrap/Col';
import ButtonAddProduct from './buttons/ProductButton';

class Product extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            quantity:0
        }

     
    }

    render(){


        return <Col xs lg="5">
        <div className='productTitle'>
        {this.props.name}    
        </div>

        <div className='productContainer'>
        <div className='count'>{this.state.quantity}x</div>
       
        <img src={"https://cdn-icons-png.flaticon.com/512/3075/3075977.png"} className={"productImage"}/>
            
        <ButtonAddProduct add={()=>this.setState({quantity:this.state.quantity+1})} sub={()=>this.setState({quantity:this.state.quantity-1})}  disabledSub={this.state.quantity == 0 ? true:false}/>
        </div>
        </Col>

    }

    
    }

export default Product;



