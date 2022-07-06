import React from "react";


class MovieList extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
        <li >
            <article className="forDisplay">
            <figure>
                <img alt="true" src={this.props.Poster}/>
            </figure>
            <div className="title">
           <span>{this.props.index+1}.</span>
            <h2>{this.props.Title}</h2>
            <b>({this.props.Year})</b>
            </div>
           
                        <h3>⭐️ {this.props.imdbRating}</h3>
                        </article>
                        <button onClick={()=>this.props.onClick(this.props.index)} className="open">READ INFO</button>
                       
        </li>
        )
    }
}

export default MovieList