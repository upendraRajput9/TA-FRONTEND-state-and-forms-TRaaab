import React from "react";

class Max extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0,
            add :1,
            max:"true"
        }
    }
    handleIncrement=()=>{
        if(this.state.counter<this.state.max||this.state.max==="true"){
        this.setState({counter:this.state.counter+this.state.add})
    }
    };
    handleDecrement=()=>{
        this.setState({counter:this.state.counter-this.state.add})
    }
    handlereset=()=>{
        this.setState({counter:0})
    }
handleStep=(num)=>{
    this.setState({add:num})
}
handleMax=(num)=>{
    this.setState({max:num})
}
    render(){
    return(
        
     <div className="app">
        <h1>{this.state.counter}</h1>
        <div className="set">
        <article className="set-step">
        <h2>Steps</h2>
        <div className="step-btn">
           <button onClick={()=>this.handleStep(5)}>5</button>
           <button onClick={()=>this.handleStep(10)}>10</button>
           <button onClick={()=>this.handleStep(15)}>15</button>
           </div>
        </article>
        <article className="set-step">
        <h2>Max Values</h2>
        <div className="step-btn">
           <button onClick={()=>this.handleMax(15)}>15</button>
           <button onClick={()=>this.handleMax(100)}>100</button>
           <button onClick={()=>this.handleMax(200)}>200</button>
           </div>
        </article>
        </div>
        <article className="btns">
           <button onClick={this.handleIncrement}>Increment</button>
           <button onClick={this.handleDecrement}>Decrement</button>
           <button onClick={this.handlereset}>Reset</button>
        </article>
    </div>
    
    )
}
}

export default Max