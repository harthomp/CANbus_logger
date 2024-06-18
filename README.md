# CANbus_logger

## Setup
``` bash
sudo sh vcan_setup.sh
sudo apt install can-utils
```

## Testing

In two seperate terminals, run:

``` bash
node collector.js
```

then

``` bash
cangen vcan0
```