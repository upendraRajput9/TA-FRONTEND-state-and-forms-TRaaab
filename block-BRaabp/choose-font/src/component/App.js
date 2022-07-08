import React from 'react'
import Article from "./Article"
import Fontfamilies from "./Font-family.json"

let alphabet = {
  sentance: 'Java is to JavaScript what car is to Carpet',
  custom:"Customize yourself",
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  paragraph:
    'A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.',
  number: 1234567890,
}
let font = [8, 12, 14, 20, 24, 30, 40, 64, 120, 184, 280]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.ref=React.createRef()
    this.myref=React.createRef()
    this.fontselect =React.createRef()
    this.fontref=React.createRef()

    this.state={
        text:alphabet["sentance"],
        fontsize:"40px"
    }
  }
  //text
  handleInput = () => {
    this.setState({
        text:alphabet[this.myref.current.value]
    })
    this.ref.current.value=this.myref.current.value==="custom"?alphabet["custom"]:"";
  }
handleChange=()=>{
    this.setState({
        text:this.ref.current.value
    })
    this.myref.current.value="custom"
    }

//font
handlefontselect=()=>{
this.setState({
    fontsize:this.fontselect.current.value+"px"
})
this.fontref.current.value=this.fontselect.current.value
}




handlefont=()=>{
this.setState({
    fontsize:this.fontref.current.value+"px"
})
}
  render() {
   let {text,fontsize}=this.state;
    return (
      <main className='container'>
        <header>
         
          <div>
            
            <select ref={this.myref} defaultValue="sentance" onChange={this.handleInput}>
              <option value="custom">Custom</option>
              <option value="sentance">Sentance</option>
              <option value="alphabet">Alphabet</option>
              <option value="paragraph">Paragraph</option>
              <option value="number">Number</option>
            </select>
            <input placeholder='Type something' type="text" ref={this.ref} onChange={this.handleChange} />
            </div>
            <div className='fontselect'>
            <select onChange={this.handlefontselect} defaultValue={40} ref={ this.fontselect}>
              {font.map((num) => (
                <option key={num} value={num}>{num+"px"}</option>
              ))}
            </select>
            <input defaultValue={40} onChange={this.handlefont} ref={this.fontref} type="range" min={8} max={300} />
          </div>
          <span onClick={() => window.location.reload()}>&#x21bb;</span>
        </header>
       
      <section>
        {
            Fontfamilies["families"].map((family,index)=><Article key={index} size={fontsize} font={family} text={text}/>)
        }
      </section>
      
      </main>
    )
  }
}

export default App
