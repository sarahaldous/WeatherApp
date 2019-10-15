import React from 'react'
import { withRouter } from 'react-router-dom'
const Home = (props) => {
    const {logout, username} = props
    return (
        <div className="homeMain">
            {/* <button onClick={logout}>Logout</button> */}
            <h3 className="welcomeText">Welcome home, {username}. Ready for your next adventure?</h3>
            <button className="planTrip" onClick={()=> props.history.push('/vacation')}>Plan A Trip!</button>
        </div>
    )
}
export default withRouter(Home)
