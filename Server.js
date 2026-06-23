const express = require("express");
const cors = require("cors");
require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/donors", require("./routes/donorRoutes"));
app.use("/api/requests", require("./routes/requestRoutes"));

app.listen(5000, ()=>{
  console.log("Server Running");
});
