import React, { Component }from 'react'



class Statefull extends Component { // donde estara el ciclo de vida de la app, los estados y los eventos a manejar.
    constructor(props){
        super(props);
        this.state = {
            hello: 'hola mundo'
        }
    }
    render(){
        return(
            <h1> {this.state.hello} </h1>
        )
    }


}



export default Statefull;
