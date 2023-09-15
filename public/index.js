const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = require('../router/route');
const Port = 8000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const hbs = require('hbs');
const staticPath = path.join(__dirname, "../static");
const viewPath = path.join(__dirname, "../views");
const layoutPath = path.join(__dirname, "../views/layout");

app.set('views', viewPath);
app.set('view engine', 'hbs');
app.use(express.static(staticPath));
hbs.registerPartials(layoutPath);

// app.use(isAuthenticated);
app.use(cookieParser());
app.use(session({
    secret: 'hellopizzajii',
    resave: false,
    saveUninitialized: true,
}));
app.use('/', router);   


app.listen(Port, () => {
    console.log(`Example app http://127.0.0.1:${Port}`)
})
