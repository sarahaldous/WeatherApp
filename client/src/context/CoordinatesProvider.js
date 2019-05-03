import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
const coordinates = (process.env.REACT_APP_OC_API_KEY)
const weather = (process.env.REACT_APP_DS_API_KEY)
const axios = require('axios')


//Add ability to save searched destinations with suitcase icon!!!!!!!
//build saveCity method
//axios.post to route on back end
const CoordinatesContext = React.createContext()

class CoordinatesProvider extends Component {
    constructor(){
        super()
        this.state = {
            latitude: "",
            longitude: "",
            city: "",
            state: "",
            currentState: "",
            currentCity: "",
            locationInput: "",
            tripLength: "",
            tempRange: "",
            activities: "",
            forecast: []
        }
    }
    getCoordinatesData = props => {
        const titleCase = (str) => {
            const strSplit = str.split(" ")
            for (let i = 0; i < strSplit.length; i++){
                strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1)
            }
            return strSplit.join(" ")
        }
        const city = titleCase(this.state.city)

        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.city}%2C%20${this.state.state}&key=${coordinates}&language=en&pretty=1`).then((response) => {
            this.setState({ latitude: response.data.results[0].geometry.lat, longitude:  response.data.results[0].geometry.lng}, () => this.getWeather())
        }).catch(function(error){
            console.log(error)
        })
    }
    getWeather = (props) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${weather}/${this.state.latitude},${this.state.longitude}`).then((response) => {
            // console.log(response.data)
            this.setState({ forecast: response.data.daily.data}, () => console.log(this.state.forecast))
            this.setState({ dailySummary: response.data.daily.summary}, () => console.log(this.state.dailySummary))
            this.setState({ weeklyIcon: response.data.daily.icon}, () => console.log(this.state.weeklyIcon))
            // this.setState({ dailyIcon: response.data.daily.icon}, () => console.log(this.state.))
            console.log(response.data.daily.data[0].time)
        }).catch(function(error){
            console.log(error)
        })
    }
    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    handleFocus = (e) => {
        e.target.select()
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                locationInput: [...prevState.locationInput, this.state.locationInput],
                tripLength: "",
                tempRange: "",
                activities: "",
                currentCity: this.state.city,
                currentState: this.state.state
            }
        },() => this.props.history.push('/weather')) 
        this.getCoordinatesData()
    }
    render(){
        return (
            <CoordinatesContext.Provider
                value={{
                    ...this.state,
                    getCoordinatesData:this.getCoordinatesData,
                    handleChange:this.handleChange,
                    handleSubmit:this.handleSubmit,
                    handleFocus: this.handleFocus
                }}>
                {this.props.children}
                </CoordinatesContext.Provider>
        )
    }
}
export const withCoordinates = C => props => (
    <CoordinatesContext.Consumer>
        {value => <C {...props} {...value} />}
    </CoordinatesContext.Consumer>
)
export default withRouter(CoordinatesProvider)