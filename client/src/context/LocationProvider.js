import React, { Component } from 'react'
import axios from 'axios'
import {withUser} from "./UserProvider.js"
const LocationContext = React.createContext()
const locationAxios = axios.create()

locationAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class LocationProvider extends Component {
    constructor() {
        super()
        this.state = {
            city: "",
            state: "",
            lat: "",
            long: "",
            locationErr: "",
            locations: [],
            mySavedLocations: [],
        }
    }
    setNewLocation = (city, state, _id) => {
        this.setState ( {
            city: city,
            state: state,
            id: _id
        }, () => this.addSavedLocation())
    }
    // adding a saved locations to user database 
    addSavedLocation = () => {
        let newLocation = {
            city: this.state.city,
            state: this.state.state,
            lat: this.state.lat,
            long: this.state.long
        }
        locationAxios.post(`/api/weather/`, newLocation).then(response => {
           
            this.setState(prevState => ({
                mySavedLocations: [...prevState.mySavedLocations, response.data]
            }))
        })
            .catch(err => console.log(err))
    }
    handleSaveLocation = id => {
        const newLocation = this.state.locations.find( location => location.id === id)
        for(let key in newLocation){
            if(key !== "title" && key !== "vicinity" &&  key !== "id"){
                delete newLocation[key]
            }
        }
        this.addSavedCity(newLocation)
    }
    getSavedLocations = id =>{
        locationAxios.get(`/api/weather/`).then(response =>{
            this.setState({
                mySavedLocations: response.data
            })
        })
        .catch (err => console.log(err))
    }
    // user will be able to delete a saved location with handle delete 
    handleDelete = id => {
        console.log(id)
        locationAxios.delete(`api/weather/${id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                mySavedLocations: prevState.mySavedLocations.filter(location => location._id !==  id)
            }))
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <LocationContext.Provider
                value={{
                    lat: this.state.lat,
                    long: this.state.long,
                    locationErr: this.state.locationErr,
                    locations: this.state.locations,
                    mySavedLocations: this.state.mySavedLocations,
                    handleSaveLocations: this.handleSaveLocations,
                    addSavedLocations: this.addSavedLocations,
                    getSavedLocations:this.getSavedLocations,
                    handleDelete: this.handleDelete,
                    setNewLocation: this.setNewLocation
                }}>
                {this.props.children}
            </LocationContext.Provider>
        )
    }
}
export const withLocation = C => props => (
    <LocationContext.Consumer>
        {value => <C {...props} {...value} />}
    </LocationContext.Consumer>
)
// wrapping with user context to be able to make requests to our own DB
export default withUser(LocationProvider)