const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if(req.method === "POST"){
     if(req.url === "/submit-form.js") {
        let body = "";

        req.on("data",(chunk) => {
         body += chunk;   
     });
     
     req.on("end",() => {
        const formData = new URLSearchParams(body);
        const email = formData.get("email");
        const newsletter = formData.get("newsletter") === "on";

    console.log("Received form data", {email, newsletter});

    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Form submitted successfully");

    });
    }
    } else {
      let filePath = "." + req.url;
      if ((filePath = "./")) {
        fillepath = "index.html";
      }
      const extname = path.extname(filePath);
      let contentType = "text/html";
      
      switch (extname) {
      case ".css":
       contentType = "text/css";
       break;
       case ".js":
       contentType = "application/javascript";
       break; 
      }

     fs.readFile(filePath,(error,content) => {
        if(error) {
         if((error.code = "ENOENT")) {
            res.writeHead(404);
            res.end("404 File Not Found");
         }else {
            res.writeHead(500)
            res.end("500 Internal Server Error");
         }
        }else {
            res.writeHead(200,{"Content-Type":contentType });
            res.end(content,"utf8");
        }
     });
    }
    });

    const port = 8080;
    server.listen(port,() => {
     console.log('Server running on port ${port}'); 
    });
