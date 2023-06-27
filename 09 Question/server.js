const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName)=>{
    console.log(`Thanks you for subscrining to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);
console.log("calling event listenr before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event lisnter after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");