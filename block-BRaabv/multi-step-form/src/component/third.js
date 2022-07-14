import {Component} from "react";

export default class Third extends Component{
    state={
        message:""
    }

    render(){
        return(
            <div className={this.props.className}>
            <header>
               <ul>
                <li>
                    <div>✔️</div>
                    <span>Sign Up</span>
                </li>
                <li>
                    <div>✔️</div>
                    <span>Message</span>
                </li>
                <li>
                    <div className='pageNO'>3</div>
                    <span>Checkbox</span>
                </li>
               </ul>
               <hr/>
            </header>
           
            <div>
                <span>Step3/3</span>
                <h1>Checkbox</h1>
                <div className="icon">
               <figure>
                <img alt="men" src="https://png.pngtree.com/element_our/png/20190103/business-man-line-black-icon-png_309140.jpg"/>
               </figure>
                    <figure><img alt="women" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU5A29XJAx6zc8aWtA7ko5op9A9mYjyKAEg&usqp=CAU" /></figure>
                    </div>
                   
                    <div>
                        <div>
                            <input type="checkbox"/>
                            <span>The number one choice</span>
                        </div>
                        <br/>
                        <div>
                            <input type="checkbox"/>
                            <span>Let me click on the checkbox and choose some cool stuff</span>
                        </div>
                    </div>
                <br/>
                <br/>
                
                <hr/>
                <br/>
                <div className="btn-parent">
                   
                <button onClick={()=>this.props.call("second")}>Back</button>
                <button>Submit</button>
                </div>
            </div>
            </div>
        )
    }
}