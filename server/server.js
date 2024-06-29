// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const postRoutes = require("./routes/postRoutes");

// require("dotenv").config();

// const app = express();

// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/posts", postRoutes);

// mongoose
//   .connect(process.env.MONGODB_uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connected to mongoDb");
//   })
//   .catch((error) => {
//     console.error("failed to connect", error);
//   });
// app.listen(PORT, () => {
//   console.log(`server is running at ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 5000;
const MONGODB_URI =
  "mongodb+srv://bushraz072:Lkz9c6YOMF3Tm7K0@blogapp.gpkvqww.mongodb.net/?retryWrites=true&w=majority&appName=blogapp"; // Replace with your MongoDB URI

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/posts", postRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
