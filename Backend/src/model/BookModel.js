const mongoose = require("mongoose")

const BooksSchema = new mongoose.Schema({
    bookname:{
        type: string,
        require
    },
    authoreName:{
        type:string,
        require
    },
    price:{
        type:number,
    },
    catagory:string
})

module.exports = mongoose.model("Books", BooksSchema);