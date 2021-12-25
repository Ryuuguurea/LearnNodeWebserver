let mainSocket=null

function connect(){
    mainSocket=new WebSocket('ws://localhost:8000/basic')
    mainSocket.onopen=function(e){
        console.log('open success')
    }
    mainSocket.onerror=function(e){
        console.log('err:'+e)
    }
    mainSocket.onmessage=function(m){
        console.log(m.data)
    }
}
function disconnect(){
    mainSocket.close()
}
function sendMessage(){
    let message=document.querySelector("#messageInput").value
    mainSocket.send(message)
}