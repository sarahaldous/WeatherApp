const mongoose = require("mongoose")
const Schema = mongoose.Schema


const locationSchema = new Schema({
    
        city: String,
        state: String,
        latitude: String,
        longitude: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }
)

module.exports = mongoose.model("Locations", locationSchema)