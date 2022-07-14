import {Component} from "react";
import First from "./frist";
import Second from "./second";
import Third from "./third";

export default class App extends Component{
  state={
    active:"first"
  }
    handledisplay=(index)=>{
   this.setState({
    active:index
   })
    }
    render(){
        return(
            <main className="container">
                <section>
                    <figure>
                    <img alt="#" src="/caution.jpg"/>
                    </figure>
                    <article>
                    <First call={this.handledisplay} className={this.state.active==="first"?"":"active"}/>
                    <Second call={this.handledisplay} className={this.state.active==="second"?"":"active"}/>
                <Third call={this.handledisplay} className={this.state.active==="third"?"":"active"}/>
                    </article>
                </section>
            </main>
        )
    }

}