import React from "react";
class Article extends React.Component{
    constructor(props){
        super();
    }
render(){
    return(
 <li>
    <figure>
        <img alt={this.props.title} src={this.props.img}/>
    </figure>
    <article>
        <div><h2>{this.props.title}</h2><span>${this.props.price}</span></div>
        <hr/>
        <p>{this.props.desc}</p>
    </article>
 </li>
    )
}
}

export default Article