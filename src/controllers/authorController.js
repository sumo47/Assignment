const AuthorModel= require("../models/author")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

module.exports.createAuthor = createAuthor