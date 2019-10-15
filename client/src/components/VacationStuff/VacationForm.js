// import { PromiseProvider } from "mongoose";

import React from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import { PromiseProvider } from 'mongoose';


const VacationForm = (props) => {
   

   
    return (
    
        <form className="vacationForm" onSubmit={props.handleSubmit}>
            <input  type="text"
                    className="input"
                    name="city"
                    placeholder="City"
                    value={props.city}
                    onChange={props.handleChange}
                    onFocus={props.handleFocus}
                    onChange={props.handleChange} 
                    onSubmit={props.handleSubmit}/>
            <input  type="text"
                    className="input"
                    name="state"
                    placeholder="State or Country"
                    value={props.state}
                    onChange={props.handleChange}
                    onChange={props.handleChange} 
                    onSubmit={props.handleSubmit}/>
            {/* <input  type="calendar"
                        name="dates"
                        value={props.dates}
                        /> */}
                <button className="submitButton">Submit</button>
                

       </form>
    )
}
export default withCoordinates(VacationForm)