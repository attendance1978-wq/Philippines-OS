const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Load accounts from the JSON file
const getAccounts = () => JSON.parse(fs.readFileSync('./accounts.json', 'utf8'));

app.post('/verify-key', (req, res) => {
    const { key, deviceId } = req.body;
    const accounts = getAccounts();

    console.log(`Verification request for Key: ${key} from Device: ${deviceId}`);

    if (accounts[key]) {
        return res.json({ 
            status: "success", 
            message: "Access Granted", 
            user: accounts[key].owner 
        });
    } else {
        return res.status(403).json({ 
            status: "error", 
            message: "Invalid or Expired Key" 
        });
    }
});

app.listen(PORT, () => console.log(`Philippines-OS Server running on port ${PORT}`));
