import http from "http"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
 
const server = http.createServer((req,res) => {
     const filepath= path.join(__dirname,"Message.txt");
        fs.readFile(filepath,"utf-8",(err,data) => {
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"})
                res.end("error reading file");
            }else{
                res.writeHead(200,{"Content-Type":"text/plain"})
                res.end(data);


            }
        });
});
server.listen(3000, () => {
    console.log("server is running on port 3000");
})