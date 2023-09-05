const express = require("express");
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

app.use(cors())

const sever = http.createServer(app)

const io = new Server(sever,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    }
})

io.on("connection",(socket)=>{
    socket.on("clienttosever",(data)=>{
        socket.broadcast.emit("severtoclient",data)
        console.log(data)
    })
})

sever.listen("6969",()=>{console.log("loading_sever...")})