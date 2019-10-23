import React, {Component} from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import {withLocation} from '../../context/LocationProvider.js'
import {withUser} from '../../context/UserProvider.js'
import LocationForm from './LocationForm.js'
import moment from 'moment'

class WeatherDisplay extends Component {
   constructor(){
        super()
        this.state={
        }
    }
    componentDidMount(){
        this.props.getCoordinatesData()
    }
  
    saveLocation = () => {
       this.props.setNewLocation(this.props.city, this.props.state, this.props.user._id)
    }
    render(){
  
       const convertPercentage = percentage => {
           return `${percentage*100}%`
       }
            let mappedDay = this.props.forecast.map((dayWeather, i) => {
                let weatherImage = ""

                switch(dayWeather.icon){
                   case 'rain': 
                   weatherImage="https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'snow': 
                   weatherImage="https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'sleet': 
                   weatherImage="https://images.unsplash.com/photo-1444384851176-6e23071c6127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'clear-day': 
                   weatherImage="https://images.unsplash.com/photo-1429318733208-8ea7c5671090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'wind': 
                   weatherImage="https://images.unsplash.com/photo-1506888861922-6311fd190754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'fog': 
                   weatherImage="https://images.unsplash.com/photo-1518134114050-1b126d2e81eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'cloudy': 
                   weatherImage="https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'partly-cloudy-day': 
                   weatherImage="https://images.unsplash.com/photo-1501071431528-9a5b594a79a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;
                   case 'partly-cloudy-night': 
                   weatherImage="https://images.unsplash.com/photo-1501071431528-9a5b594a79a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                   break;

                   default:
                   weatherImage = ""
                }

                return (
                    <div key={i}>
                   
                    <div className="weeklyInfo"></div>
                       <div className="dailyInfo" >
                            <div className="date">
                                <p>{moment(dayWeather.time * 1000).format("dddd, MMM DD, YYYY")}</p>
                            </div>
                            <div className="dailyDetails" style={{backgroundImage: `url(${weatherImage})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <p>Summary: {dayWeather.summary}</p>
                                <p>High: {parseFloat(dayWeather.temperatureHigh).toFixed()}°F</p>
                                <p>Low: {parseFloat(dayWeather.temperatureLow).toFixed()}°F</p>
                                <p>Feels Like: {parseFloat(dayWeather.apparentTemperatureLow).toFixed()}°F to {parseFloat(dayWeather.apparentTemperatureHigh).toFixed()}°F</p>
                                <p>Humidity: {parseFloat(convertPercentage(dayWeather.humidity)).toFixed()}%</p>
                                <p>Cloud Cover: {parseFloat(convertPercentage(dayWeather.cloudCover)).toFixed()}%</p>
                                <p>Chance of Precipitation: {parseFloat(convertPercentage(dayWeather.precipProbability)).toFixed()}%</p> 
                                <p>Wind Speed: {parseFloat(dayWeather.windSpeed).toFixed()} MPH</p>
                            </div>
                        </div> 
                    </div>
                )
            })
            
      return (
        <div>
            <LocationForm />
            <h1>{this.props.currentCity && "This week in " + this.props.currentCity[0].toUpperCase() + this.props.currentCity.slice(1) + ", " + this.props.currentState[0].toUpperCase() + this.props.currentState.slice(1)}</h1>
            <div className="saveLocationDiv">
                <button className="saveLocation" onClick={this.saveLocation}>Save Location</button>
            </div>
            <h2>{this.props.dailySummary}</h2>
            <h2>{this.props.summary}</h2>
            {mappedDay}
        </div>
       )
    }
}


export default withUser(withLocation(withCoordinates(WeatherDisplay)))

