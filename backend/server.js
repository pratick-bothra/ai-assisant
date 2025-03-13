require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("AI Assistant Backend Running!");
});

const PORT = process.env.PORT || 5000;

// Define a simple route for the root path
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
