import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withUser} from '././context/UserProvider.js'
// import { withPlayer } from './context/PlayerProvider';

class NavBar extends Component {
    render(){

        const welcomeMessage = `Welcome, ${this.props.name}`
        return (
            <nav className="navBar">
                <Link to="/home">Home</Link>
                <Link to="/weather">Weather</Link>
                <Link to="/locations">Saved Locations</Link>
                <span className="logoutLink" onClick={this.props.logout}>Log Out</span>
                {/* <h3>{welcomeMessage}</h3> */}
            </nav>
        )
    }
}


export default withUser(NavBar)