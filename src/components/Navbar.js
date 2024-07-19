import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='nav-container'>

                <div className='nav-left'> 
                    <a href='https://amazon.com'>Home</a>
                </div>

                <div className='nav-center'>
                <a href='https://amazon.com'>About Us</a>
                </div>

                <div className='nav-right'>
                <a href='https://amazon.com'>FAQ</a>
                </div>

            </div>
        );
    }
}

export default Navbar;

// On line 1, the React library and its class known as "Component" are imported. On line 3, "Navbar" which in this case is a React 
// component, is declared. Line 4, allows the JSX to work in the DOM. On line 6, the div is container for the Navbar. On lines 8-18
// the divs have links to the main Amazon page and are assigned class names "nav-left", "nav-center", and "nav-right" in order to be styled.
// Line 25 exports the Navbar.