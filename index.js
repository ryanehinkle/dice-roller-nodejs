const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests from all origins
app.use(cors());

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Route to roll dice
app.get('/roll-dice', (req, res) => {
    const result1 = Math.floor(Math.random() * 6) + 1;
    const result2 = Math.floor(Math.random() * 6) + 1;
    const sum = result1 + result2;

    // Send JSON response with dice roll results
    res.json({
        result1: result1,
        result2: result2,
        sum: sum
    });
});

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
  })
  
  // custom 500 page
  app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
  })

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
