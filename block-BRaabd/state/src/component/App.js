import React from "react"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image:"../assets/cricket.jpg"
        }
    }

    handler= (img)=> {
        console.log(img)
        this.setState({image:`../assets/${img}.jpg`})
    }
    
    render(){
      return(
        <center>
<button onClick={()=>this.handler("basketball")}>BasketBall</button>
<button onClick={()=>this.handler("cricket")}>Cricket</button>
<button onClick={()=>this.handler("laptop")}>Laptop</button>
<button onClick={()=>this.handler("phone")}>Phone</button>
<button onClick={()=>this.handler("pubg")}>PUBG</button>
<button onClick={()=>this.handler("tiger")}>Tiger</button>
<figure>
<img src={this.state.image} alt="true"/>
</figure>
        </center>
      )
    }
}


export default App