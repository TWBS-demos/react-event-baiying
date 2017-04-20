let express  = require("express")
let app = new express();

app.use(express.static(__dirname + '/'));

app.listen(3000,()=>{
    console.log("listining 3000 port");
})