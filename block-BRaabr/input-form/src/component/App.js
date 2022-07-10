import React from "react"
import MultipleInput from "./multiple-input"
import Validation from "./Register"

class App extends React.Component{
    render(){
        return(
            <main>
                <h2>Multiple input form</h2>
<MultipleInput/>
<h2>Register With Us</h2>
<Validation/>
            </main>
        )
    }
}

export default App