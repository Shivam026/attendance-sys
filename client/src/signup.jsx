import {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import axios from 'axios';
import {Link, useNavigate,useParams} from "react-router-dom";
function Signup() {
  const{id}=useParams()
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const[wwc, setWwc]=useState()
   const[status, setstatus]=useState()
   const[c_tee, setctee]=useState()
   const[year, setYear]=useState()
   const[dob, setDob]=useState()
   const[age, setAge]=useState()
   const[address, setAddress]=useState()
   const[suburb, setSuburb]=useState()
   const[postcode, setPostcode]=useState()
   const[mobile, setMobile]=useState()
   const[emergencycontact, setEmergencycontact]=useState()
   const[emergencycontactname, setEmergencycontactname]=useState()
   const[relation, setRelation]=useState()
   const[gender, setGender]=useState()
   const today = new Date().toISOString().split('T')[0];





   const navigate = useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password,wwc,c_tee,status,year,dob,age,address,suburb,postcode,mobile,emergencycontact,emergencycontactname,relation,gender})
    .then(res=>{
      window.location.reload()
    }).catch(err=>console.log(err))
   } 
  const myStyle={
    color: "black"
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
                <h3><Link to={`/Attendance/${id}`}> Attendance</Link></h3> 
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
    <div className="b1">
  
    <div className="report-container">
    <div class="report-header"> 
        <h1 class="recent-Articles">Signup</h1>  
    </div> 
    <div className="content">
    <form onSubmit={handleSubmit}>
  <div className="user-details">
    <div className="input-box"> 

    <label for="name" className="details">Name</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="name" placeholder="Enter name" required  onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="input-box">
    <label for="year" classname="details" style={myStyle}>Year join</label>
    <input type="date" autocomplete="off" max={today} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="year" placeholder="Enter year"required onChange={(e)=>setYear(e.target.value)}/>
    
  </div>
  
  
  <div className="input-box"  style={{ display: 'flex' }} >
    <label for="wwc" className="details">Working with children</label>
    <select className="vw" name="wwc" value={wwc} onChange={(e)=>setWwc(e.target.value)}>
      <option></option>
      <option>yes</option>
      <option>no</option>
    </select>
  </div>
  <div className="input-box"  style={{ display: 'flex' }} >
    <label for="c_tee" className="details">C/Tee</label>
    <select className="vw" name="c_tee" value={c_tee} onChange={(e)=>setctee(e.target.value)}>
      <option></option>
      <option>yes</option>
      <option>no</option>
    </select>

  </div>
  
  <div className="input-box">
    <label for="dob" className="details">Date of Birth</label>
    <input type="date" autocomplete="off" max={today} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="dob" placeholder="Enter dob"required onChange={(e)=>setDob(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="age" classname="details" style={myStyle}>Age</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="age" placeholder="Enter age"required onChange={(e)=>setAge(e.target.value)}/>
    
  </div>     
  
  <div class="input-box">
    <label for="address"className="details"> Address</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="address" placeholder="Enter address"required onChange={(e)=>setAddress(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="suburb" className="details">Suburb</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="suburb" placeholder="Enter suburb" required onChange={(e)=>setSuburb(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="postcode" className="details">Postcode</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="postcode" placeholder="Enter postcode"required onChange={(e)=>setPostcode(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="mobile" className="details">Mobile Phone</label>
    <input type="number" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mobile" placeholder="Enter phone number"required onChange={(e)=>setMobile(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="emergency contact" className="details">Emergency contact Name</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emergencycontactname" placeholder="Enter emergency contact name"required onChange={(e)=>setEmergencycontactname(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="emergency contact" className="details">Emergency contact number</label>
    <input type="number" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emergencycontact" placeholder="Enter emergency contact number"required onChange={(e)=>setEmergencycontact(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="relationship" className="details">Emergency contact relationship</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="relation" required placeholder="Enter relation" onChange={(e)=>setRelation(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="email" className="details">Email address</label>
    <input type="email" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div class="input-box">
    <label for="password" className="details">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <div className="input-box" >
    <label for="status" className="details">Status</label>
    <select className="vw" name="status" value={status} onChange={(e)=>setstatus(e.target.value)}>
      <option></option>
      <option>Life Member</option>
      <option>Honorary</option>
      <option>Financial</option>
      <option>Veteran</option>
    </select>

  </div>

  </div>
  
  
  

  <div class="gender-details">
  
          <input type="radio" name="gender"  value="male" onChange={(e)=>setGender(e.target.value)}/>Male
          <input type="radio" name="gender"  value="female" onChange={(e)=>setGender(e.target.value)}/>Female
          <input type="radio" name="gender"  value="other" onChange={(e)=>setGender(e.target.value)} />Other
        
        </div>
  
  
  <button type="submit" class="button btn-primary">Submit</button>
  <p style={myStyle}>Already have an account</p>
  <button><Link to="/" class="btn btn-primary"style={myStyle}>Login</Link></button>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      )

}
export default Signup;
