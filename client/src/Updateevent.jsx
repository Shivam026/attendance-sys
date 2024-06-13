import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useNavigate,useParams} from "react-router-dom";
import './dashboard.css';
function Updateevent(){
    const{id}=useParams()
    const[nameevent,setNameEvent] =useState()
    const[dateevent,setDateEvent]=useState()
    const[durationevent,setDurationEvent]=useState()
    const[venueevent,setVenueEvent]=useState()
    const[eventfield,setEventfield]=useState()
 
    const navigate=useNavigate()
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getEvent/'+id)
        .then((result)=>{
            console.log(result) 
            setNameEvent(result.data.nameevent)
            setDateEvent(result.data.dateevent)
            setDurationEvent(result.data.durationevent)
            setVenueEvent(result.data.venueevent)
            setEventfield(result.data.eventfield)
            
        }).catch(err=>console.log(err))
    },[])
    const Update = (e) =>{
        e.preventDefault()
    axios.put('http://localhost:3001/updateEvent/'+id,{nameevent,dateevent,durationevent,venueevent,eventfield})
    .then(result=>{
      console.log(result)  
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
                <h3><Link to={`/content/${id}`}> Member</Link></h3> 
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
                <h3> <Link to={`/Attendance/${id}`}>Attendance</Link></h3> 
            </div> 

            <div class="nav-option option4"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                    class="nav-img"
                    alt="institution"/> 
                <h3> <Link to={`/Re/${id}`}>Register Event</Link></h3> 
            </div> 

            <div class="nav-option option5"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                    class="nav-img"
                    alt="blog"/> 
                 <h3> <Link to={`/Ve/${id}`}>View Event</Link></h3>
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
<div class="report-container-1" > 
    <div class="report-header"> 
        <h1 class="recent-Articles">Update</h1>  
    </div> 
<div class="report-body"></div>
            <form onSubmit={Update}>
    <div style={{ display: 'flex', marginBottom: '20px' }}>
    <div className="input-box"style={{ display: 'flex', marginRight: '290px' }} >  
    <label for="name" className="details">Nameevent:   </label>
    <input type="text" autocomplete="off" class="form-control"  id="exampleInputEmail" aria-describedby="emailHelp" name="nameevent" placeholder="Enter name" value={nameevent} onChange={(e)=>setNameEvent(e.target.value)} />
    </div>
    <div className="input-box" style={{ display: 'flex' }}>
    <label for="year" classname="details">Date</label>
    <input type="date" autocomplete="off"   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="dateevent" placeholder="Enter date" value={dateevent} onChange={(e)=>setDateEvent(e.target.value)}/>
    
  </div>
    
  </div>

  
    
  <div style={{ display: 'flex', marginBottom: '20px' }}>

    <div className="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="dob" className="details">Duration</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="durationevent" placeholder="Enter duration" value={durationevent} onChange={(e)=>setDurationEvent(e.target.value)}/>
    
    </div>

    <div className="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="dob" className="details">Venue</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="venueevent" placeholder="Enter venue" value={venueevent} required onChange={(e)=>setVenueEvent(e.target.value)}/>
    
    </div>



    </div>

  <div style={{ display: 'flex', marginBottom: '20px' }}>

  <div class="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="address"className="details">Field</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="eventfield" placeholder="Enter activity name" value={eventfield} onChange={(e)=>setEventfield(e.target.value)}/>
    
  </div>
  
  
  </div>
  <button type="Update">Update</button>

 
  </form>
        </div>



                        


                        
        </div>


        
        
        </div>
    )
}
export default Updateevent;