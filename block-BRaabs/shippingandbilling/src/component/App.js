import React from "react";
import Billling from "./Billing"
import Shipping from "./Shipping"

class App extends React.Component{
 constructor(props){
    super()
    this.state={
        shipping:{address:"",
        zipcode:"",
        city:"",
        country:""
    },
    billing:{address:"",
    zipcode:"",
    city:"",
    country:""
}
    }
 }
    handle=(name,value)=>{
      this.setState({
        shipping:name
      })
    }
handlecopy=(check)=>{
let shipping=this.state.shipping

this.setState({
    billing:{
        address:check?shipping.address:"",
        zipcode:check?shipping.zipcode:"",
        city:check?shipping.city:"",
        country:check?shipping.country:"",
    }
})

}

    render(){
        return(
        <>
        <Billling check={this.handlecopy} data={this.state.billing}/>
<Shipping data={this.handle}/>
        </>
        )
    }
}

export default App