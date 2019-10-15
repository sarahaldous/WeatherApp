import React, {Component} from 'react'
import {withLocation} from '../../context/LocationProvider.js'



class SavedLocations extends Component {
    
       componentDidMount(){
           this.props.getSavedLocations()
       }
    render (){

    
    let mappedSavedLocations = this.props.mySavedLocations.map((location, i) => {
        console.log(location)
        return (
            <div>
               
            <div >
                
                <div className="savedLocations">
                    <p>{location.city},  {location.state}</p>
                    <button className="saveLocation" onClick={() => this.props.handleDelete(location._id)}>Delete</button>
                </div>
            </div>
            </div>
        )
        })
        console.log(this.props)
    return (
        <div>
            <h2>Saved Locations</h2>
            {mappedSavedLocations}
        </div>
    )
}
}

export default withLocation(SavedLocations)

//map over saved locations from location provider and save it.