import React from "react";


class Shipping extends React.Component{
    constructor(props){
        super()
        this.state={
            address:"",
            zipcode:"",
            city:"",
            country:"",
            error:{
                address:""
            }
        }
        
    }
    handleInput=({target})=>{
let {name,value}=target;
switch(name){
    case "address":
        this.setState({
            error:{address:value.length<8?"You need to enter at-least 8 characters":""}
        })
        break;
        default:
        break
}

this.setState({[name]:value})       
this.props.data(this.state)
    }

    render(){
        
        return(
            <article>
                <h2>Shipping Address</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Address</label>
                <input onChange={this.handleInput} placeholder="Address" name="address"/>
                <span>{this.state.error.address}</span>
                <label>ZIP/Postal Code</label>
                <input onChange={this.handleInput} placeholder="Zipcode" name="zipcode"/>
                <label>City</label>
                <input onChange={this.handleInput} placeholder="City" name="city"/>
                <label>Country</label>
                <input onChange={this.handleInput} placeholder="Country" name="country"/>
            </form>
            </article>
        )
    }
}


export default Shipping
