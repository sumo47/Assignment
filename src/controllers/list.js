const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/author")
const author = require("../models/author")
const bookModel = require("../models/bookModel")

const ListofChetan = async function (req, res) {
    let data = req.query.author
    let savedData = await AuthorModel.find({ author_name: data }).select({ author_id: 1, _id: 0 })
    let id = savedData[0].author_id
    // console.log(savedData);
    let bookName = await bookModel.find({ author_id: { $eq: id } }).select({ name: 1, _id: 0 })
    res.send({ msg: bookName })
}

const UpdatePrice = async function (req, res) {
    let UpdatePrice = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let id = UpdatePrice.author_id
    let name = await AuthorModel.find({ author_id: { $eq: id } }).select({ author_name: 1, _id: 0 })
    res.send({ msg: name })
}

const Between = async function (req, res) {
    let book = await bookModel.find({ price: { $gt: 50, $lt: 100 } })
    const arr = book.map(element => element.author_id)
    // console.log(arr);
    authorName=[]
    for(let element of arr){
        authorName.push((await AuthorModel.findOne({ author_id: { $eq: element } }).select({ author_name: 1, _id: 0 })).author_name) //i want in this code in higherorder 
    }
    res.send({ msg: authorName })
}
module.exports.Between = Between
module.exports.UpdatePice = UpdatePrice
module.exports.ListofChetan = ListofChetan