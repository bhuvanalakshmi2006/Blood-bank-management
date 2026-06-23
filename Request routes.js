const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

router.get("/", async(req,res)=>{
  res.json(await Request.find());
});

router.post("/", async(req,res)=>{
  const request = await Request.create(req.body);
  res.json(request);
});

module.exports = router;
