const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());  // Parse JSON data

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

// API endpoint to return dynamic content
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// Handle contact form submission
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.json({ message: "Form submitted successfully!" });
});

// Serve homepage for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
