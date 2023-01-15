import React, { Component } from 'react';
import Login from './Login';
import HomePage from './HomePage';

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        if (this.state.isLoggedIn) {
            return <HomePage></HomePage>
        }
        else {
            return <Login></Login>
        }
    }
}

export default Index;

//conditional rendaring system -1