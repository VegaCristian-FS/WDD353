let f = require("fs")
f.readFile("thefile.text", "utf8", (err, contents) =>{
    if (err){
        console.log(err);
    } else { 
        console.log(contents);
    }
    console.log("done!")
})



