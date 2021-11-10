import './App.css';
import Button from './button';
import React, { Component } from 'react'


class App extends Component{
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state={
      value:0
    }
  }
  update=()=>{
    this.setState({
      value:this.child.getValue()
    })
  }
  render(){
    return (
      <div className="App">
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <h1>hello World</h1>  
            <Button ref={instance => { this.child = instance; }}  update={this.update}/> 

            
          </div> 
  
        </div>
      </div>
    );
  }
 
}

export default App;
