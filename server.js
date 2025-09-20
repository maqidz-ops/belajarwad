const express = require('express');
const app = express();
const PORT = 3000;

//import Routes
const aboutUsRoutes = require('./routes/aboutUsRoutes');
const greetingRoutes = require('./routes/greetingRoutes');

//app use routes
app.use('/aboutus', aboutUsRoutes);
app.use('/greeting', greetingRoutes);

//base route
app.get('/', (req, res)=>{
    res.send('Welcome to the Home Page');
});

app.listen(PORT, ()=>console.log('server running at http://localhost:' + PORT));
