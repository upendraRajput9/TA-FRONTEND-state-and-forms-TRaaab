import React from "react";

class Max extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            add :1,
            max:"true"
        }
    }
    handleIncrement=()=>{
        let {count,add,max} = this.state
        this.setState({count:count+add>max?count:count+add})
    };
    handleDecrement=()=>{
        this.setState({count:this.state.count-this.state.add})
    }
    handlereset=()=>{
        this.setState({count:0})
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
        <h1>{this.state.count}</h1>
        <div className="set">
        <article className="set-step">
        <h2>Steps</h2>
        <div className="step-btn">
            {[5,10,15].map((step)=> <button key={step} className={this.state.add===step?"active":"stepBtn"} onClick={()=>this.handleStep(step)}>{step}</button>)}
           </div>
        </article>
        <article className="set-step">
        <h2>Max Values</h2>
        <div className="step-btn">
        {[15,100,200].map((step)=>  <button className={this.state.max===step?"active":"stepBtn"} onClick={()=>this.handleMax(step)}>{step}</button>)}
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