import {Component} from "react";

export default class Second extends Component{
    state={
        message:""
    }

    render(){
        return(
            <div className={this.props.className} >
            <header>
               <ul>
                <li>
                    <div>✔️</div>
                    <span>Sign Up</span>
                </li>
                <li>
                    <div className='pageNO'>2</div>
                    <span>Message</span>
                </li>
                <li>
                    <div>3</div>
                    <span>Checkbox</span>
                </li>
               </ul>
               <hr/>
            </header>
            <div>
                <span>Step2/3</span>
                <h1>Message</h1>
                <form>
                    <div className="message">
                    <label>Message</label>
                    <textarea>

                    </textarea>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox"/>
                            <span>The number one choice</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>The number two choice</span>
                        </label>
                    </div>
                </form>
                <hr/>
                <br/>
                <div className='btn-parent'>
                <button onClick={()=>this.props.call("first")}>Back</button>
                <button onClick={()=>this.props.call("third")}>Next Step</button>
                </div>
            </div>
            </div>
        )
    }
}