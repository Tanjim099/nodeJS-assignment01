// const fs =  require("02question");

// fs.writeFile("nodejs_architechure.txt", "Updated by Tanjim", function(err){
//     if(err){
//         console.log("Error in writing file");
//     }
//     else{
//         console.log("Success in writing file");
//     }
// })

const fs = require("fs");

fs.writeFile("nodejs_architecture", "Updated by Tanjim", function(err) {
  if (err) {
    console.log("Error in writing file");
  } else {
    console.log("Success in writing file");
  }
});