const EventEmitter = require('events');
const emitter = new EventEmitter();

const bellRang=()=>{
    console.log("Bell has been rung!")
}
emitter.on("bell-rang",bellRang)
emitter.on("bell-rang",()=>{
    console.log("Teacher starts the class!")
})
emitter.on("bell-rang",()=>{
    console.log("Student start student!")
})

emitter.emit("bell-rang");
emitter.off("bell-rang",bellRang)
emitter.emit("bell-rang");



////call multiple run multiple
// emitter.on("bell-rang",()=>{
//     console.log("Bell has been rung!")
// })

// emitter.emit("bell-rang");
// emitter.emit("bell-rang");


////call mu;tiple but run once
// emitter.once("bell-rang",()=>{
//     console.log("Bell has been rung!")
// })

// emitter.emit("bell-rang");
// emitter.emit("bell-rang");

