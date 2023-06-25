const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
const userRoute = require('./routes/user')




app.use(userRoute)

app.listen(3000)