import React from "react"
import data from "./data.json"
import Article from "./Article"


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
        category:"all",
        art:data
        }
    }
    handle=(category)=>{
        (this.setState(()=>{
            return {category:category,
                art:category==="all"?data:data.filter((elm)=> elm.category===category)
            }
        }))
    }
   
    render(){
let {art} = this.state
        return(
               <main className="container">
               <h1>Our Menu</h1>
               <hr className="heading-line"/>
               <div className="btn-div">
               <button onClick={()=>this.handle("all")} className={this.state.category==="all"?"active":""}>All</button>
               <button onClick={()=>this.handle("breakfast")} className={this.state.category==="breakfast"?"active":""}>Breakfast</button>
               <button onClick={()=>this.handle("lunch")} className={this.state.category==="lunch"?"active":""}>Lunch</button>
               <button onClick={()=>this.handle("shakes")} className={this.state.category==="shakes"?"active":""}>Shakes</button>
               </div>
               <section>
                <ul>
            {art.map((elm)=>
               <Article key={elm.id} {...elm}/>
            )}
            </ul>
               </section>
               </main>
        )
    }
}

export default App