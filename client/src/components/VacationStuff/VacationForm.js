// import { PromiseProvider } from "mongoose";

import React from 'react'
import {withCoordinates} from '../../context/CoordinatesProvider.js'
import { PromiseProvider } from 'mongoose';


const VacationForm = (props) => {
   

   
    return (
    
        <form className="vacationForm" onSubmit={props.handleSubmit}>
            <input  type="text"
                    name="city"
                    placeholder="City"
                    value={props.city}
                    onChange={props.handleChange}
                    onFocus={props.handleFocus}/>
            <input  type="text"
                    name="state"
                    placeholder="State or Country"
                    value={props.state}
                    onChange={props.handleChange}/>
            {/* <input  type="calendar"
                        name="dates"
                        value={props.dates}
                        /> */}
                <button>Submit</button>
                

       </form>
    )
}
export default withCoordinates(VacationForm)