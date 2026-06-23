import {useState,useEffect} from "react";
import axios from "axios";

function Requests(){

const [requests,setRequests]=useState([]);
const [patientName,setPatientName]=useState("");
const [bloodGroup,setBloodGroup]=useState("");
const [units,setUnits]=useState("");

const loadData=async()=>{
 const res=await axios.get("http://localhost:5000/api/requests");
 setRequests(res.data);
}

useEffect(()=>{
 loadData();
},[]);

const addRequest=async()=>{
 await axios.post("http://localhost:5000/api/requests",{
  patientName,
  bloodGroup,
  units
 });
 loadData();
}

return(
<div>

<h2>Blood Requests</h2>

<input
placeholder="Patient Name"
onChange={(e)=>setPatientName(e.target.value)}
/>

<input
placeholder="Blood Group"
onChange={(e)=>setBloodGroup(e.target.value)}
/>

<input
placeholder="Units"
onChange={(e)=>setUnits(e.target.value)}
/>

<button onClick={addRequest}>
Request Blood
</button>

<hr/>

{
 requests.map((r)=>(
  <div key={r._id}>
   {r.patientName} -
   {r.bloodGroup} -
   {r.units} Units
  </div>
 ))
}

</div>
)
}

export default Requests;
