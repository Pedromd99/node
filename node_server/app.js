const bodyParser = require('body-parser');
const path = require('path');
var express = require('express')
var app = express();

const routes = require('./routes/index');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname,'public')));

//start the server
app.listen(3000,() => {
    console.log('Servidor funcionando en 3000');
});