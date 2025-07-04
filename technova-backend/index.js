const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from TechNova's backend!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

// For any unmatched route, send back React’s index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
