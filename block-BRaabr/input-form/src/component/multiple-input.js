import React from "react";

class MultipleInput extends React.Component{
constructor(props){
    super()
    this.state={
text:"",
date:"",
file:"",
read:"",
textarea:""
    }
}

handleinput=({target})=>{
    let {name,value}=target
 this.setState({[name]:value})
}
handleSubmit =()=>{
    alert(this.state.text+this.state.date+this.state.file+this.state.read+this.state.textarea)
}
render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <label>Text Input</label>
            <input onChange={this.handleinput} name="text" type="text"/>
            <br/>
            <label>Date Input</label>
            <input onChange={this.handleinput} name="date" type="date"/>
            <br/>
            <label>File Input</label>
            <input onChange={this.handleinput} name="file" type="file"/>
            <br/>
            <label>Read-Only Input</label>
            <input onChange={this.handleinput} name="read" type="text"/>
            <br/>
            <label>Disabled Input</label>
            <input onChange={this.handleinput} type="text" disabled/>
            <br/>
            <label>Textarear</label>
            <textarea name="textarea"/>
            <br/>
            <label>Textarear Disable</label>
            <textarea disabled/>
        <input type="submit" />
        </form>
    )
}
}

export default MultipleInput