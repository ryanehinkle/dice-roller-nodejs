const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests only from specified origins
const corsWhitelist = {
    origin: 'http://example.com' 
};

// Enable CORS with only whitelisted domains -> cors(corsWhitelist)
app.use(cors());

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Route to roll dice
app.get('/roll-dice', (req, res) => {
    const result1 = Math.floor(Math.random() * 6) + 1;
    const result2 = Math.floor(Math.random() * 6) + 1;
    const sum = result1 + result2;
    console.log("API called remotely. " + "(Rolled " + sum + ")")

    // Send JSON response with dice roll results
    res.json({
        result1: result1,
        result2: result2,
        sum: sum
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});