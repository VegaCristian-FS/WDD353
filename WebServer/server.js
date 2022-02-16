const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')

//Creating server
http.createServer(function (req, res){

    let parsed = url.parse(req.url)
    // console.log(parsed)
    let filename = path.parse(parsed.pathname)

    // console.log(filename)
    let filen = filename.name == "" ? "index" : filename.name
    let ext = filename.ext == "" ? ".html" : filename.ext
    let dir = filename.dir == "/" ? "" : filename.dir + "/"  

    // console.log(ext, dir, page)

    //Removing the / and replacing with a blank
    let f = (dir + filen + ext).replace("/" , "")
    console.log(dir + filen + ext)

    //Create object for file types
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif'
    }

    if (f) {
        fs.readFile(f, function (err, data){
            if(data) {
                if(mimeTypes.hasOwnProperty(ext)){
                    res.writeHead(200, { 'Content-Type': mimeTypes[ext] })
                }
                if (ext === ".html") {
                    res.write("<script>var page = '"+ filen +"';</script>")
                }
                res.end(data)
            }
        })
    }
}).listen("8080", () =>{
    console.log("info", "Server is on port : " + 8080)
})