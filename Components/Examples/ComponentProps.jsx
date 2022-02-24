import react from "react";

class ComponentProps extends react.Component{
    render(){
        return(
            <h1>hola Mundo {this.props.name}</h1>
        )
    }

}

export default ComponentProps