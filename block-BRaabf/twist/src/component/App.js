import React from "react";
import CounterOne from "./OneStep";
import Max from "./Max";

class App extends React.Component{
   
render(){
    return(
        <main className="container">
          <CounterOne/>
          <Max/>
          </main>
    )
}
}

export default App