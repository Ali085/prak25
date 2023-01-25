const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
}, { timestamps: true }
)

const Users = mongoose.model("user", userSchema)

const app = express()

app.use(cors())
app.use(bodyParser.json())


//getAllData

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(404).json({ message: err })
        }
    })

})

//getDataBy Id

app.get("/users/:id", (req, res) => {
    let { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            } else {
                res.status(404).json({ message: err })
            }
        }
    })
})

//delete
app.delete("/users/:id", (req, res) => {
    let { id } = req.params
    Users.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.status(202).json({ message: "Seccessful delete" })
        }
        else {
            res.status(404).json({ message: err })
        }
    });
});

//post

app.post("/users", (req, res) => {
    let user = new Users({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
    user.save()

    res.send({ message: "Seccessful" })
})





const PORT = process.env.PORT;
const url = process.env.CONNECT_URL.replace(
    "<password>",
    process.env.PASSWORD

);
mongoose.set('strictQuery', false);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("db connection");

        app.listen(PORT, () => {
            console.log("Server start");
        })
    }
})