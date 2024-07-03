const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev')); // Log every request to the console in 'dev' format
app.use(bodyParser.json()); // Body parser middleware
app.use(express.json()); // Body parser middleware try 2

// Define a POST route Use middleware like body-parser to parse incoming request bodies before your handlers, available under req.body
app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({ message: 'Data received successfully', data: receivedData });
});

// test route
app.get('/test', (req, res) => {
    res.json({ ok: true });
});

// Route that takes a parameter and puts it in the page
app.get('/greet/:name', (req, res) => {
    res.json({ greeting: `Hello ${req.params.name}!` })
})

// A root route (/) to send a simple greeting as a response.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// An about route (/about) to send a brief description of the server or the project.
app.get('/about', (req, res) => {
    res.send('This is a practice server so I can learn Express')
});




// Handle non-existent routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});


const PORT = process.env.PORT || 3000; //If the environment variable PORT is set, PORT will take its value. If the environment variable PORT is not set, PORT will default to 3000.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
