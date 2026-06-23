const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

router.get("/", async(req,res)=>{
  res.json(await Donor.find());
});

router.post("/", async(req,res)=>{
  const donor = await Donor.create(req.body);
  res.json(donor);
});

router.put("/:id", async(req,res)=>{
  const donor = await Donor.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.json(donor);
});

router.delete("/:id", async(req,res)=>{
  await Donor.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

module.exports = router;
