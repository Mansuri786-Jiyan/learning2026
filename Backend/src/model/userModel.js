const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const UserInfo = new mongoose.Schema({
    fistname:{
        type:string,
    },
      lastname:{
        type:string
    },
      email:{
        type:string
    },
      password:{
        type:string
    }

})