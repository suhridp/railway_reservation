const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/trains", require("./routes/trainRoutes"));
app.use("/api/passengers", require("./routes/passengerRoutes"));

app.listen(process.env.PORT || 5000, () => console.log("Server running"));
