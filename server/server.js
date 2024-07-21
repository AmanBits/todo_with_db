const express = require("express");
const app = express();
const cors = require("cors");

// Define options for cors
const options = {
    origin:"https://localhost:8080"
};

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const router = require('./routes/itemRoutes');
app.use('/api/items',router);

// Define api
app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

// Define port
const PORT = process.env.PORT || 8080;

// Define listen
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
