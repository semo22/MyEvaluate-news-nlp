var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))

const cors = require('cors')
app.use(cors())

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dotenv = require('dotenv')
dotenv.config()
console.log(`Your API key is ${process.env.API_KEY}`);
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/addUrl',async (req,res)=>{
      const apiUrl = "https://api.meaningcloud.com/sentiment-2.1"
      const apiKey = process.env.API_KEY
      const url =req.body.url
      const response  = await fetch(`${apiUrl}?key=${apiKey}&url=${url}&lang=en`);
    try{
      const data = await response.json()
      const { agreement, subjectivity, confidence, irony } = data;
      res.send({ agreement, subjectivity, confidence, irony })
    }
    catch(error){
        console.log("ops there is an error",error)
    }
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
