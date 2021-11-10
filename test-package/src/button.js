import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    handleChange=()=>{
        this.setState({
                count:this.state.count+1
        },()=>this.props.update())
    }

    getValue(){
        return this.state.count
    }

    render() {
        return (
           
            <>
            <button className='btn btn-sm ' onClick={this.handleChange}>Count</button>
            <h2>{this.getValue()}</h2>
            </>
        )
    }
}
