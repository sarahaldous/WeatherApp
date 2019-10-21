import React from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {withUser} from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import ProtectedRoute from './shared/ProtectedRoutes.js'
import Home from './components/Home.js'
import NotFound from './components/NotFound.js'
import WeatherDisplay from './components/LocationStuff/WeatherDisplay.js'
import LocationForm from './components/LocationStuff/LocationForm'
import LocationProvider from './context/LocationProvider.js'
import SavedLocations from './components/LocationStuff/SavedLocations.js'
import NavBar from './Navbar.js'

const App = (props) => {
    const {user, token, logout} = props
    document.title = props.location.pathname === "/"  ? "" :
    props.location.pathname.slice(1)[0].toUpperCase() + 
    props.location.pathname.slice(2) 
    return (
        <div>
            <NavBar />
            <Switch>
                <Route
                    exact path="/"
                    render={() => token 
                    ? 
                    <Redirect to="/home"/> 
                    :
                    <Redirect to="/login"/>} />
               <Route   
                    path="/login"
                    render={rProps => token 
                    ? 
                    <Redirect to="/home" /> 
                    : 
                    <AuthContainer  {...rProps}/>} />
                <ProtectedRoute 
                    token={token}
                    path="/home"
                    redirectTo="/login"
                    component={Home}   
                    username={user.username}  
                    logout={logout} 
                    
                    />  
                <ProtectedRoute
                    token={token}
                    path="/location"
                    redirectTo="/login"
                    component={LocationForm}
                    username={user.username}
                    logout={logout}
                    />
                <ProtectedRoute
                    token={token}
                    path="/weather"
                    redirectTo="/login"
                    component={WeatherDisplay}
                    username={user.username}
                    logout={logout}
                    />
                <ProtectedRoute
                    token={token}
                    path="/locations"
                    redirectTo="/login"
                    component={SavedLocations}
                    username={user.username}
                    logout={logout}
                    />
                <Route path="*" component={NotFound}/>     
            </Switch>
        </div>
    )
}
export default withRouter(withUser(App))
