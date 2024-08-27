//configuramos del socket del lado del cliente

const socket=io()

socket.emit('mensaje', "Hola soy el cliente!!")

socket.on("msg02", data=>{
    console.log(data)
})

//Escuchando brodcast

socket.on("broadcast",data=>{
    console.log(data)
})

socket.on("all",data=>{
    console.log(data)
})