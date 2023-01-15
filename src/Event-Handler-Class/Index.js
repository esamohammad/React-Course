import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            changedValue: ''
        }
    }





    handleOnChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            changedValue: e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
        // console.log(this.state.changedValue)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleOnChange} />
                <p>{this.state.changedValue}</p>
            </div>
        );
    }
}

export default Index;