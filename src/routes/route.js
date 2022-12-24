const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const list = require("../controllers/list")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuther", UserController.createAuthor  )

router.post("/createBook", BookController.createBook  )
router.get("/list",list.ListofChetan )
router.post("/update",list.UpdatePice)
router.get("/between", list.Between)

module.exports = router;