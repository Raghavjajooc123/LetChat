const express=require('express')
const app=express();
const http=require('http').createServer(app)
const port=80

app.use('/static',express.static('static'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

http.listen(port,()=>{
    console.log(`the server is live on port ${port}`)
})

const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})