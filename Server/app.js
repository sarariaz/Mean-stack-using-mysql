var express = require("express");
var app = express();
var bodyParser = require ("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// List of cats
app.get("/api/cats", function(req,res){
    res.send(
        [
            { name: "Lucy"},
            { name: "Lilly"}
        ]
    )
});

// specific cat 
app.get("/api/cats/:name", function(req,res){
    var requestedCat = req.params['name'];
    res.send({ name: requestedCat});
});

// creating a new cat
app.post("/api/cats", function(req,res){
    res.send(201, req.body); //201 indicates that something was created
});

//updating 
app.put("/api/cats/:name", function(req,res){
    res.send(200, req.body);
});

app.delete("/api/cats/:name", function(req,res){
    res.send(204); //The status-code "204" -No Content
})







// lisenting to the port
app.listen(8000, () => {
    console.log('Server started!')
  });