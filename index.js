const express = require('express');
const app = express();
const morgan = require('morgan');
const CookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const PORT = 3001;
//Settings
app.set('json spaces', 2);

//Midelware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(CookieParser());

//Routes
app.use(routes);
app.get("/", (req,res)=> {
    res.json({status: "active"})
})
//Starting Server
app.listen(app.get('port'), () => {         
    console.log(`Server on port ${PORT}`);
}); 