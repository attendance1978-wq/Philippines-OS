# Philippines OS for Arduino/ESP32

Philippines OS is a lightweight Arduino/ESP32 operating system with:

- SD card installation
- Optional server activation
- Trial key: `arduinophicore` (5 months)
- Account-based device registration

## Features

1. OS runs offline from flash
2. Trial key limited for 5 months
3. Activation tied to a single Arduino account
4. Optional server services: updates, modules

## Installation

1. Flash `ArduinoOS/PhilippinesOS.ino` to your ESP32/Arduino
2. Insert SD card with `philippines_os.bin` (optional)
3. Connect to Wi-Fi on first boot
4. Enter trial/product key to register to your account
5. OS runs offline after activation

## Backend Server

- Node.js server in `Server/` directory
- Handles product key registration and account verification
- Example: `npm install && node server.js`
