import react from "react";

class Estados extends react.Component{
    constructor(props){
        super(props)
        this.state = {estado : 'activo'}
    }
    cambiarEstado() {
        this.setState({
            estado : 'inactivo'
        })
    }

    render(){
        return(
            <><h1>Estado {this.state.estado}</h1><button onClick={this.cambiarEstado()}></button></>
        )
    }

}

export default Estados