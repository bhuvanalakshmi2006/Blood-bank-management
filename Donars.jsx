import {useState,useEffect} from "react";
import axios from "axios";

function Donors(){

const [donors,setDonors]=useState([]);
const [name,setName]=useState("");
const [bloodGroup,setBloodGroup]=useState("");
const [mobile,setMobile]=useState("");

const loadData=async()=>{
 const res=await axios.get("http://localhost:5000/api/donors");
 setDonors(res.data);
}

useEffect(()=>{
 loadData();
},[]);

const addDonor=async()=>{
 await axios.post("http://localhost:5000/api/donors",{
  name,
  bloodGroup,
  mobile
 });
 loadData();
}

const deleteDonor=async(id)=>{
 await axios.delete(`http://localhost:5000/api/donors/${id}`);
 loadData();
}

return(
<div>
<h2>Donors</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Blood Group"
onChange={(e)=>setBloodGroup(e.target.value)}
/>

<input
placeholder="Mobile"
onChange={(e)=>setMobile(e.target.value)}
/>

<button onClick={addDonor}>
Add Donor
</button>

<hr/>

{
 donors.map((d)=>(
  <div key={d._id}>
   {d.name} - {d.bloodGroup} - {d.mobile}

   <button
   onClick={()=>deleteDonor(d._id)}
   >
   Delete
   </button>
  </div>
 ))
}

</div>
)
}

export default Donors;
