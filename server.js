const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets (usually on heroku)

// Add routes, both API and view once set up

app.get('/', (req, res) => {
    console.log('yoooo')
})

app.post('/backend-route', (req, res) => {
    console.log(req.body)
})

// Connect to the Mongo DB once set up

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})