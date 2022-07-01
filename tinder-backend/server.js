import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'


//app config
const app = express();
const port =process.env.PORT|| 8001
const connection_url='mongodb+srv://admin1:22YDyBIJsncL66ka@cluster0.1eo6i.mongodb.net/?retryWrites=true&w=majority'

//middleware
app.use(express.json())
app.use(Cors());

//db config
mongoose.connect(connection_url)
//api endpoints
app.get('/', (req, res)=> res.status(200).send('hello'))
app.post('/tinder/cards',(req, res)=>{
  const dbCards=req.body;

  Cards.create(dbCards,(err,data)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(201).send(data)
    }
  })
} );

app.get('/tinder/cards',(req, res)=>{
  Cards.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(200).send(data)
    }
  })
})

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))
