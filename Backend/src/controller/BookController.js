const Books = require('../model/BookModel')

const AddBook = (req,res) =>{
    const add = Books.create(req.body)
    res.status(200).json({
        massege:"Created Successfully",
        data:add
    })
}