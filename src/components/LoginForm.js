import React, { Component } from 'react';

// On line 1, the React library along with the Class known as "Component" are imported.

// I got help with lines 7-23 from the following link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password 

class LoginForm extends Component {
    render() {
        return (
            <div className='login-container'>
                <h3>Log In</h3>

                <div>
                    <label> Username:</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password"/>
                </div>

                    <input type="submit" value="Sign in" />




            </div>
        );
    }
}

export default LoginForm;

// On lines 7-33, "LoginForm" which is a React component, is declared. The render method is used and it allows JSX to function in the DOM.
// On line 10, the  purpose of the "div", is to behave as the container for the form. On lines 14,19,and 23 the "div"'s allow for 
// the labels and input fields to be added. Line 33, exports the form.

