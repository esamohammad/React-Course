import React, { Component } from 'react'

export default class State extends Component {

    //constructor 
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    //increment function
    handleIncrement = () => {
        // console.log('clicked')
        this.setState({
            count: this.state.count + 1
        })
    }


    //decrement function
    handleDecrement = () => {
        // console.log('clicked')
        this.setState({
            count: this.state.count - 1
        })
    }



    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Count :{count}</h1>
                <button onClick={this.handleIncrement} >+</button>
                <button onClick={this.handleDecrement} disabled={count === 0 ? true : false} >-</button>
            </div>
        )
    }
}

//very important topics.ok

