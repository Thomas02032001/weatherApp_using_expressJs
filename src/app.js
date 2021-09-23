const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const hbs = require('hbs');

// public static path
const staticPath = path.join(__dirname, "../public"); // index.html is home page by the name we given "index" so it will show it on local host main page so it follow top to bottum approach
const dinamicPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('views', dinamicPath); // for dynamic
hbs.registerPartials(partialsPath); // saying that we are using partials
app.use(express.static(staticPath)); // for static


// app.get(route, callback)
app.get("/", (req, res) => {
    //res.send("welcome HOME page");
    res.render('index.hbs');
});

app.get("/about", (req, res) => {
    //res.send("welcome to ABOUT page");
    res.render('about.hbs');
});

app.get("/weather", (req, res) => {
    //res.send("welcome to WEATHER page");
    res.render("weather.hbs");
});

app.get("*", (req, res) => {
    //res.send("404 error pages");
    res.render("404error.hbs", {
        errormsg: 'opps! Page Not Found'
    })
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});