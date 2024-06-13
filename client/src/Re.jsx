import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useNavigate,useParams} from "react-router-dom";
import './dashboard.css';
function Re(){
const{id}=useParams()
const[nameevent,setNameEvent] =useState()
const[dateevent,setDateEvent]=useState()
const[durationevent,setDurationEvent]=useState()
const[venueevent,setVenueEvent]=useState()
const[eventfield,setEventfield]=useState()

const navigate = useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/eventregister',{nameevent,dateevent,durationevent,venueevent,eventfield})
    .then(res=>{
        window.location.reload()
    }).catch(err=>console.log(err))
   }
   const logout = () => {
    console.log('logout')
    navigate('/')
};
return(    
<div> 
<header> 

<div class="logosec"> 
    <div class="logo">Cardinia Men's shed</div> 
     
</div> 



</header> 

<div class="main-container"> 
<div class="navcontainer"> 
    <nav class="nav"> 
        <div class="nav-upper-options"> 
            <div class="nav-option option1"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                    class="nav-img"
                    alt="dashboard"/> 
                <h3><Link to={`/content/${id}`}>Member</Link></h3> 
            </div> 

            <div class="option2 nav-option"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                    class="nav-img"
                    alt="articles"/> 
                <h3> <Link to={`/register/${id}`}>Register new Member</Link></h3> 
            </div> 

            <div class="nav-option option3"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                    class="nav-img"
                    alt="report"/> 
                <h3><Link to={`/Attendance/${id}`}>Attendance</Link></h3> 
            </div> 

            <div class="nav-option option4"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                    class="nav-img"
                    alt="institution"/> 
                <h3><Link to={`/Re/${id}`}> Register Event</Link></h3> 
            </div> 

            <div class="nav-option option5"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                    class="nav-img"
                    alt="blog"/> 
                <h3><Link to={`/Ve/${id}`}> View event</Link></h3> 
            </div> 

            <div class="nav-option option6"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                    class="nav-img"
                    alt="settings"/> 
                <h3><Link to={`/profile/${id}`}> Profile</Link></h3> 
            </div> 

            <div class="nav-option logout"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                    class="nav-img"
                    alt="logout"/> 
                <h3 onClick={logout}>Logout</h3> 
            </div> 

        </div> 
    </nav> 
</div> 


 
 <div class="report-body"></div>
 <form onSubmit={handleSubmit}>
 <div class="report-container-1"> 
    <div class="report-header"> 
        <h1 class="recent-Articles">Register Events</h1>  
    </div> 
    <div class="report-body"></div>
    
                        <table style={{marginLeft:'0px' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>                                  
                                    <th>Venue</th>
                                    <th>Duration</th>
                                    <th>Drpdown</th>
                                    <th></th>
                                     
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td><input type="text" autocomplete="off" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="nameevent" placeholder="Enter name" required  onChange={(e)=>setNameEvent(e.target.value)}/></td>
                            <td><input type="date" data-date-format="DD MMMM YYYY" autocomplete="off" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="dateevent" placeholder="dd-mm-yyyy" required  onChange={(e)=>setDateEvent(e.target.value)}/></td>
                            <td><input type="text" autocomplete="off" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="venueevent" placeholder="Enter venue" required  onChange={(e)=>setVenueEvent(e.target.value)}/></td>
                            <td><input type="text" autocomplete="off" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="durationevent" placeholder="Enter duration" required  onChange={(e)=>setDurationEvent(e.target.value)}/></td>

                           
                            <td>
                            <select  name="eventfield"  onChange={(e)=>setEventfield(e.target.value)}>
                            <option value="wood">Wood</option>
                            <option value="Cookery">Cookery</option>
                            <option value="art">art</option>
                            <option value="gardening">gardening</option>
                            </select>
                            </td>
                            <td><button  type="submit"  class="btn-primary" id="e.id" >Register</button></td>
                            </tr>
                            </tbody>
                            </table>
                            
    </div>

 </form>   
</div>
 </div>
)
}
export default Re;