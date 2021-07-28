require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const proxyRouter = require("./routes/proxy");
const adminRouter = require("./routes/admin");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/proxyServer", proxyRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => console.log(`Listening...`));
