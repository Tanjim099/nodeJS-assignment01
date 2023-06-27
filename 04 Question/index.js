const fs = require("fs");

fs.appendFile("nodejs_architecture.txt ", " - update by Tanjim", function(err){
    if(err){
        console.log("error in appending flie")
    }
    else{
        console.log("Success in appending files")
    }
})