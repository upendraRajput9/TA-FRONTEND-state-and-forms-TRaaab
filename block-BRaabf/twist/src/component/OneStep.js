import React from "react";

class CounterOne extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0,
            add :1
        }
    }
    handleIncrement=()=>{
        this.setState({counter:this.state.counter+this.state.add})
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
    render(){
    return(
       
    <div className="app">
        <h1>{this.state.counter}</h1>
        <article className="set-step">
            <h2>Steps</h2>
        <div className="step-btn">
           <button onClick={()=>this.handleStep(5)}>5</button>
           <button onClick={()=>this.handleStep(10)}>10</button>
           <button onClick={()=>this.handleStep(15)}>15</button>
           </div>
        </article>
        <article className="btns">
           <button onClick={this.handleIncrement}>Increment</button>
           <button onClick={this.handleDecrement}>Decrement</button>
           <button onClick={this.handlereset}>Reset</button>
        </article>
    </div>
    
    )
}
}

export default CounterOne