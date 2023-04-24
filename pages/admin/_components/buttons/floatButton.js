import React from "react";


class FloatButton extends React.Component{

    constructor(props){
        super(props)
    }



    render(){
        return <div onClick={this.props.onClick} className={`floatButton ${this.props.position}`} style={{display:this.props.display?"":"none"}}>{this.props.title}</div>
    }


}


export default FloatButton;