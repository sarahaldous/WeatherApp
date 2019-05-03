import React, {Component} from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import {withLocation} from '../../context/LocationProvider.js'
import {withUser} from '../../context/UserProvider.js'
import VacationForm from './VacationForm.js'
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
    console.log(this.props)
    }
    render(){
  
       const convertPercentage = percentage => {
           return `${percentage*100}%`
       }
            let mappedDay = this.props.forecast.map((dayWeather, i) => {
                const convertTime = (unixTime) => {
                    const date = new Date(unixTime*1000)
                   
                } 
                convertTime()
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
                   weatherImage="https://images.unsplash.com/photo-1429318733208-8ea7c5671090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
                   
                    <div className="weeklyInfo">
                    
                        
                        {/* Put weekly weather summary here */}
                       </div>
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
                           {/* alerts */}
                          </div>
                         
                     </div> 
                     </div>
                )
 
            })
            
      return (
        <div>
            <VacationForm />
            <h1>{this.props.currentCity && "This week in " + this.props.currentCity[0].toUpperCase() + this.props.currentCity.slice(1) + ", " + this.props.currentState[0].toUpperCase() + this.props.currentState.slice(1)}</h1>
            <button onClick={this.saveLocation}>Save Location</button>
            <h2>{this.props.dailySummary}</h2>
            {/* <div>{this.props.weeklyIcon}</div> */}
            <h2>{this.props.summary}</h2>
            {mappedDay}
        </div>
       )
    }
}


export default withUser(withLocation(withCoordinates(WeatherDisplay)))

// temperatureHigh: 65.37
// temperatureLow: 50.75
// apparentTemperatureHigh: 61.65
// apparentTemperatureLow: 47.98
// cloudCover: 0.87
// humidity: 0.72
// icon: "partly-cloudy-day"
// precipType: "rain"
// summary: "Mostly cloudy throughout the day."
// time: 1554274800  <<-- need to convert this to a readable time
// windSpeed: 3.83
// "precipProbability": 0.33,
// daily -> summary and daily -> data -> [0] -> summary


    // const convertTime = (props) => {
        //     const unixTimestamp = this.props.time;
        //     const date = new Date(unixTimestamp*1000)
        //     let myDate = this.props.time
            
        //     myDate = new Date(this.props.time *1000);
        //     // write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
        //     console.log(this.props.time)
        //     console.log(date)
        //     console.log(myDate)
        //    }