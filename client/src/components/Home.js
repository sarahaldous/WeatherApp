import React from 'react'
import { withRouter } from 'react-router-dom'
const Home = (props) => {
    const {logout, username} = props
    return (
        <div>
            <button onClick={logout}>Logout</button>
            Welcome home, {username}. Ready for your next adventure?
            <button onClick={()=> props.history.push('/vacation')}>Plan A Trip!</button>
        </div>
    )
}
export default withRouter(Home)
// {props.username} on line 7???