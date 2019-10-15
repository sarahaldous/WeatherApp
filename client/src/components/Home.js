import React from 'react'
import { withRouter } from 'react-router-dom'
const Home = (props) => {
    const {logout, username} = props
    return (
        <div className="homeMain">
            {/* <button onClick={logout}>Logout</button> */}
            <h3 className="welcomeText">Welcome, {username}! </h3>
            <div className="appDescription">
                <h4>This app is built in React, with a MongoDB/Mongoose backend that allows users to save favorite locations. It also incorporates authentication so that users can create new usernames and passwords for their accounts.</h4>
                <h4>It was built as a way for users to look up the weather in any location by city and state or country. It uses a powerful weather API that gives forecasts, humidity, "feels like" temperatures, and other helpful information. </h4>
                <h4>In addition to being a fully CRUD application, this app includes a database which allows users to store their favorite cities for reference. </h4>
                <h4>Once weather from a certain location has been requested, a switch statement determines which picture should display behind each day's weather data. This way, users can see at a glance what kind of weather will predominate that week.</h4>
            </div>
            
            <button className="planTrip" onClick={()=> props.history.push('/vacation')}>Check the Forecast!</button>
        </div>
    )
}
export default withRouter(Home)
