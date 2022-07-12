import React from "react"

class Article extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <article>
                <div>
                <h2>{this.props.font.split(",")[0]}</h2>
                <span>{this.props.font}</span>
                </div>
                <h1 style={{fontSize:this.props.size,fontFamily:this.props.font}}>{this.props.text}</h1>
            </article>
        )
    }
}
export default Article