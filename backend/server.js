import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import fileupload from 'express-fileupload'
import File from './models/File'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/fileupload"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

app.use(fileupload());

app.post('/saveImage', (req, res) => {
  const image = req.files.myFile
  const path = __dirname + '/images/' + image.name
})

if (!req.files) {
  return res.status(500).send({ msg: "file not found " })
}
// accessing the file 
const myFile = req.files.file;

//mv() methos places the file inside public directory 
myFile.mv(`${__dirname}/public/${myFile.name}`), async (err) => {
  if (err) {
    console.log(err)
    return res.status(500).send({ msg: "Error occured" });
  }
  const upLoadedFile = new File({ filename: myFile.name, uploader, date: Date.now(), type: samplefile.mimetype })
  await upLoadedFile.save()
}

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
