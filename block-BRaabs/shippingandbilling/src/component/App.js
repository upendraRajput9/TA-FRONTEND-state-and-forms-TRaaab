import React,{Component} from "react";


export default class App extends Component{
     state={
        shipping:{address:"",
        zipcode:"",
        city:"",
        country:""
    },
    billing:{address:"",
    zipcode:"",
    city:"",
    country:""
},
isSame:false
    }
 
   
handleShipping=({target})=>{
const {name,value}=target;
this.setState(state => ({
    shipping: { ...state.shipping , [name]: value }
  }));
}
handleCheck=()=>{
    this.setState(state => ({
        isSame:!state.isSame
      }));
}



    render(){
    let {isSame,shipping,billing}=this.state;
    let billingdata=isSame?shipping:billing
        return(
            
        <main>
        
        <header>
            <h1>📁 Learning About Forms</h1>
            <p>Shipping And Billing Address</p>
        </header>
        <h2>Controlled Component</h2>
        <section>
            
            <article>
                <form>
                    <h3>Shipping Address</h3>
                    <div>
                        <label>Adress</label>
                        <input onChange={this.handleShipping} type="text" name="address" placeholder="e.g shiya kunj Rath"/>
                    </div>
                    <div>
                        <label>ZIP/Postal Code</label>
                        <input onChange={this.handleShipping} type="text" name="zipcode" placeholder="e.g 210431"/>
                    </div>
                    <div>
                        <label>City</label>
                        <input onChange={this.handleShipping} type="text" name="city" placeholder="e.g Kanpur"/>
                    </div>
                    <div>
                        <label>Country</label>
                        <input onChange={this.handleShipping} type="text" name="country" placeholder="e.g India"/>
                    </div>
                </form>
            </article>


            <article>
                <form>
                    <h3>Billing Address</h3>
                    
                        <input  type="checkbox" onClick={this.handleCheck}/>
                        <span>Same as the Shipping Adress?</span>
                    
                    <div>
                        <label>Adress</label>
                        <input defaultValue={billingdata.address} type="text" name="adress" placeholder="e.g shiya kunj Rath"/>
                    </div>
                    <div>
                        <label>ZIP/Postal Code</label>
                        <input defaultValue={billingdata.zipcode} type="text" name="zipcode" placeholder="e.g 210431"/>
                    </div>
                    <div>
                        <label>City</label>
                        <input defaultValue={billingdata.city} type="text" name="city" placeholder="e.g Kanpur"/>
                    </div>
                    <div>
                        <label>Country</label>
                        <input defaultValue={billingdata.country} type="text" name="country" placeholder="e.g India"/>
                    </div>
                </form>
            </article>
        </section>
        </main>
        )
    }
}

 