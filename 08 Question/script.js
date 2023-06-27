const events = require('events');

const eventEmitter = new events.EventEmitter();

// Subscribe event handler
const subscribeEventHandler = (channel) => {
  console.log(`Thanks For Subscribing to ${channel}`);
};

// Subscribe event
eventEmitter.on('subscribe', subscribeEventHandler);

// Trigger the subscribe event
eventEmitter.emit('subscribe', 'College Wallah');