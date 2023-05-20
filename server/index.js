const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();
const multer = require('multer');
const cors = require("cors");


app.use(express.json());

app.use(cors());

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Soumyaranjan:utnipsom@soumya-db.3rzvirb.mongodb.net/file-sharing",
    { useNewUrlParser: true }
)
    .then(() => console.log("mongoDB is connected."))
    .catch((err) => console.log(err));

app.use("/", route);


let port = 5000;
app.listen(port, function () {
    console.log(`Express app is running on port ${port}`);
});