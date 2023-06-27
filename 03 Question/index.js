const fs = require("fs");

// Asynchrounus way to read file

fs.readFile("nodejs_architecture.txt", function(err, data){
    if(err){
        console.log("error in reading file", err);
    }
    console.log("data", data.toString());
    console.log("success")
});

// synchronous way to read file

fs.readFileSync("nodejs_architecture.txt");
console.log("data", data.toString());
