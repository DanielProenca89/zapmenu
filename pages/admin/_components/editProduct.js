import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import ButtonAddProduct from './buttons/ProductButton';


class EditProduct extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            nome:this.props.name,
            preço:this.props.preco,
            descricao:"",
            editTitle:0,
            editPrice:false
        }
    }
save(){
    console.log(this.state)
    this.setState({editTitle:0})
}

edit(){
   
    if(this.state.editTitle < 1){
    this.setState({editTitle:1})
    }
}
    render(){

        return <Col sm={5} md={2}>
        <div className='productTitle' onClick={()=>this.edit()} >
        {this.state.editTitle==1?<><input className="inputEdit" type="text" onChange={(e)=>this.setState({nome:e.target.value})} value={this.state.nome} autoFocus/><span className="save" onClick={()=>this.save()}>✔️</span></>:!this.state.nome?"Novo nome":this.state.nome}    
        </div>
        

        <div className='productContainer'>
        
       
        <img src={"https://cdn-icons-png.flaticon.com/512/3075/3075977.png"} className={"productImage"}/>
            
        <ButtonAddProduct add={()=>this.setState({quantity:this.state.quantity+1})} sub={()=>this.setState({quantity:this.state.quantity-1})}  disabledSub={this.state.quantity == 0 ? true:false}/>
        </div>
        </Col>
    }
}


export default EditProduct;