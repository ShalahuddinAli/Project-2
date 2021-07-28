require("dotenv").config();
const express = require("express");
const app = express();
// const jwt = require("jsonwebtoken");
const proxyRouter = require("./routes/proxy");
// const userRouter = require("./routes/user");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/proxyServer", proxyRouter);
// app.use("/admin", userRouter);

app.listen(PORT, () => console.log(`Listening...`));
