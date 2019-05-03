const mongoose = require("mongoose")
const Schema = mongoose.Schema

const packingListSchema = new Schema({
    packingList: [{
        essentials: {
            type: String,
        },
        hiking: {
            type: String,
        },
        workout: {
            type: String,
        },
        fancyEvent: {
            type: String,
        },
        swimming: {
            type: String,
        },
        photography: {
            type: String,
        },

    }]
})

module.exports = mongoose.model("PacklingLists", packingListSchema)