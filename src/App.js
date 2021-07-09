import React from "react"

class App extends React.Component {
  constructor(){
    super();
    this.state={counter:0}
  }
  HandleChange=(prevState)=>{
    this.setState({counter:prevState.counter+1})
  }
    render(){
      return(
        <div>
            Hi i am counter {this.state.counter}
            <button>Click me</button>
            <button onClick={this.HandleChange}>Change Counter</button>
        </div>
      )
    }
}
export default App