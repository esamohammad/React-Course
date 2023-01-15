/*
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

*/














/*

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
        const {isLoggedIn}=this.state //destructuring
        let element;
        
        if (isLoggedIn) {
            element= <HomePage></HomePage>
        }
        else {
            element= <Login></Login>
        }
        return(
            <div>{element}</div>
        )
    }
}

export default Index;

//conditional rendaring system -2 element variable

*/











//conditional rendaring system -3 ,Ternary Method-1

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
        const { isLoggedIn } = this.state //destructuring

        let element;
        element = isLoggedIn ? <HomePage /> : <Login />

        return (
            <div>
                {element}
            </div>
        )
    }
}

export default Index;

//conditional rendaring system -3 ,Ternary Method-1