const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const AuthRoute = require('./routes/AuthRoute')
const mongoose = require('mongoose')
const Middleware = require('./middleware/middleware')
const InterestRoute = require('./routes/UserInterest')
const articleRoute = require('./routes/article')
// set up middleware



app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

// app.use(bodyParser.json()); // Parse JSON request bodies

const allowedOrigins = ['https://mern-news-app-innorik.onrender.com/', 'http://localhost:3000/'];

// Set up CORS to allow requests from the specified origins
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to include cookies in your requests
}));


app.use('/auth',AuthRoute)

app.use('/interest',InterestRoute )

app.use('/articles',articleRoute)






  mongoose.connect(process.env.MONGO_DB,
    {useNewUrlParser:true , useUnifiedTopology:true}
    ).then(()=>{
        app.listen(process.env.PORT,()=>console.log(`Server Listening at ${process.env.PORT}`));
    }).catch((err)=>console.log(err))




