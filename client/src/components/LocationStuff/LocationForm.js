// import { PromiseProvider } from "mongoose";

import React from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import { PromiseProvider } from 'mongoose';


const LocationForm = (props) => {
    return (
        <form className="locationForm" onSubmit={props.handleSubmit}>
            <input  type="text"
                    className="input"
                    name="city"
                    placeholder="City"
                    value={props.city}
                    onChange={props.handleChange}
                    onFocus={props.handleFocus} 
                    onSubmit={props.handleSubmit}/>
            <input  type="text"
                    className="input"
                    name="state"
                    placeholder="State or Country"
                    value={props.state}
                    onChange={props.handleChange}
                    onSubmit={props.handleSubmit}/>
                <button className="submitButton">Submit</button>
                

       </form>
    )
}
export default withCoordinates(LocationForm)