var can = require("socketcan");
const fs = require("node:fs");

function writeToFile(msg) {
    var record = `${msg.ts_sec},${msg.ts_usec},${msg.id},${msg.data}\n`;

    fs.appendFile("can.log", record, err => {
        if (err) { 
            console.error(err);
            // Unsafe exit
            process.exit()
        }
    });
}

var channel = can.createRawChannel("vcan0", true);

channel.addListener("onMessage", writeToFile);

channel.start();
