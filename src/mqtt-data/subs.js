const mqtt = require('mqtt/dist/mqtt');
let client = mqtt.connect('ws://test.mosquitto.org:8081');
let powerMeterData;

client.on('connect', function () {
  client.subscribe('/powerMeterData');
  console.log('client subscribe topic power meter data');
});

client.on('message', function (topic, message) {
  console.log('messageConnected');
  powerMeterData = JSON.parse(message.toString('utf8'));
  console.log(powerMeterData);
});

module.exports = powerMeterData;
