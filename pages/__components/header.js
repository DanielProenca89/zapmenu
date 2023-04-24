import React from "react";
import Stack from "react-bootstrap/Stack"

class Header extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        return <header className="head">
            <Stack direction="horizontal" gap={2}>

                <div className="title"><h1>{this.props.title}</h1></div>

            </Stack>
        </header>
    }
}

export default Header;