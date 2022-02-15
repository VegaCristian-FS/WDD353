let fs = require("fs")
let http = require("http")
let path = require("path")
let url = require("url")

http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url)
    let fileName = path.parse(parsedUrl.pathname)
    let file = fileName.name

    if(file == ""){
        file="home"
    }
    console.log(file)

    fs.readFile(file+".html", "utf8",(err, body) => {
        if(err){
            response.writeHead(505)
            response.end("Error, Something went wrong!")
        } else {
            response.writeHead(200)
            response.write("<script>let name = 'Mike' </script>")
            response.end(body)
        }
    })
}).listen(8080)