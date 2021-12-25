const express=require('express')
const expressWs=require('express-ws')
const app = express()
app.use(express.static(`${__dirname}/public`))
expressWs(app)
app.get('/',function(req,res,next){
    res.sendFile(`${__dirname}/public/index.html`)
})


app.ws('/basic',function(ws,req){
    console.log('some connected')
    ws.on('message',function(msg){
        console.log('message:'+msg)
        ws.send("you send:"+msg)
    })
    ws.on('close',function(e){
        console.log('connect close')
    })
})
app.listen(8000,()=>{
    console.log(`express listen 8000`)
})