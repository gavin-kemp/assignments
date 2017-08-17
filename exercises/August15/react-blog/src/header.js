import React from 'react';
import Navbar from './navbar';

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1 className="a-header">SMILE IN RUSSIAN</h1>
                <Navbar />
            </div>
        )
    }
}

export default Header;