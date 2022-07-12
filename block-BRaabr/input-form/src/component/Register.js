import React from "react";

class Validation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:'',
            confirm:"",
            error:{
                username:"",
                email:"",
               password:"",
               confirm:""
            }
        }
    }
 validateEmail=(email) =>
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    handleinput=({target})=>{
        let {name,value}=target;
        let error = this.state.error;
        switch(name){
            case "email":
                console.log(this.validateEmail(value))
                error.email= this.validateEmail(value)?"":"Email error"
                break;
                case "password":
                    error.password=value.length<6?"password cannot be less then 5":"";
                    break;
                    case "confirm":
                        error.confirm=this.state.password===value?"":"password is not match"
                        break;
                    default:
                        break;
        }
        this.setState({[name]:value})
       
    }
render(){
    let {email,password,confirm}=this.state.error
    return(
        <form>
            <label>Username</label>
            <input onChange={this.handleinput} type="text" name="username" placeholder="Enter Username"/>
           
            <br/>
            <label>Email</label>
            <input onChange={this.handleinput} type="email" name="email" placeholder="Enter email"/>
            <span>{email}</span>
            <br/>
            <label>Password</label>
            <input onChange={this.handleinput} type="password" name="password" placeholder="Enter password"/>
            <span>{password}</span>
            <br/>
            <label>Confirm Password</label>
            <input onChange={this.handleinput} type="password" name="confirm"/>
            <span>{confirm}</span>
            <br/>
            <input type="submit"/>
        </form>
    )
}
}

export default Validation