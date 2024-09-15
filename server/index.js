const express=require("express");
const socketIo=require("socket.io");

const{addUsers,removeUsers, getUsers, getUsersInRoom}=require("./users");

const app=express();

const expressServer=app.listen(3000,()=>{
    console.log("server is live");
} )

const io=socketIo(expressServer,{
    cors:{
        origin:"*"
    }
});


app.get('/',(req,res)=>{

    res.send("sever is up an running");
});


io.on('connection'  , (socket)=>{

    console.log("a client has connect with id: ",socket.id);

    socket.on('onJoin',( {name,room}, callback )=>{
        console.log(`${name} has joined the room:${room}`);

        const {error,user}=addUsers({id:socket.id, name ,room});

        if(error){
            return callback(error)
        }
        socket.join(room);    

        socket.emit("mssg",{user:'admin'  ,text:`Hello ${user.name},Welcome to the room ${user.room}` })
        socket.broadcast.to(user.room).emit("mssg",{user:'admin',text:`${user.name} has joined the room`})
        
        io.to(user.room).emit('roomData',{room:user.room ,users:getUsersInRoom(user.room)  })
        callback();
    });

    socket.on('sendMssg',  (message,callback)=>{
        const user=getUsers(socket.id);
        //  console.log(message);       
        //  console.log(user);       
        io.to(user.room).emit('mssg',{user:user.name ,text:`${message}`  });

        callback();
    } )
    
        
    socket.on('disconnect',()=>{
        console.log("user had left !!!");
        const user=removeUsers(socket.id);

        if(user){
            io.to(user.room).emit('mssg',{user:'admin' ,text:`${user.name} has left the room`});
        }
        // console.log(user);
    })

})


