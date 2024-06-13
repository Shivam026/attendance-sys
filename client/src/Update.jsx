import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useNavigate,useParams} from "react-router-dom";
import './dashboard.css';
function Update(){
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
 
    const navigate=useNavigate()
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getUser/'+id)
        .then((result)=>{
            console.log(result) 
            setName(result.data.name)
            setEmail(result.data.email)
            setAddress(result.data.address)
            setYear(result.data.year)
            setDob(result.data.dob)
            setAge(result.data.age)
            setPostcode(result.data.postcode)
            setMobile(result.data.mobile)
            setEmergencycontact(result.data.emergencycontact)
            setEmergencycontactname(result.data.emergencycontactname)
            setRelation(result.data.relation)
            setPassword(result.data.password)
            setWwc(result.data.wwc)
            setstatus(result.data.status)
            setctee(result.data.c_tee)
            setSuburb(result.data.suburb)
            setGender(result.data.gender)

        }).catch(err=>console.log(err))
    },[])
    const Update = (e) =>{
        e.preventDefault()
    axios.put('http://localhost:3001/updateUser/'+id,{name,email,address,year,dob,age,postcode,mobile,emergencycontact,emergencycontactname,relation,password,wwc,status,c_tee,suburb,gender})
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
    <label for="name" className="details">Name:   </label>
    <input type="text" autocomplete="off" class="form-control"  id="exampleInputEmail" aria-describedby="emailHelp" name="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="input-box" style={{ display: 'flex' }}>
    <label for="year" classname="details">Year join</label>
    <input type="date" autocomplete="off"  max={today} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="year" placeholder="Enter year" value={year} onChange={(e)=>setYear(e.target.value)}/>
    
  </div>
    
  </div>

  <div style={{ display: 'flex', marginBottom: '20px' }}>

    <div className="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="dob" className="details">Working with children</label>
    <select className="vw" name="wwc" value={wwc} onChange={(e)=>setWwc(e.target.value)} style={{fontSize:'small', marginLeft: '0px' }}>
      <option></option>
      <option>yes</option>
      <option>no</option>
    </select>
    </div>

    <div className="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="c_tee" className="details">C/Tee</label>
    <select className="vw" name="c_tee" value={c_tee} onChange={(e)=>setctee(e.target.value)}  style={{fontSize:'small', marginLeft: '0px' }}>
      <option></option>
      <option>yes</option>
      <option>no</option>
    </select>
    </div>



    </div>
    
  <div style={{ display: 'flex', marginBottom: '20px' }}>

    <div className="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="dob" className="details">Date of Birth</label>
    <input type="date" autocomplete="off" max={today} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="dob" placeholder="Enter dob" value={dob} onChange={(e)=>setDob(e.target.value)}/>
    
    </div>

    <div className="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="dob" className="details">Age</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="age" placeholder="Enter age" value={age} required onChange={(e)=>setAge(e.target.value)}/>
    
    </div>



    </div>

  <div style={{ display: 'flex', marginBottom: '20px' }}>

  <div class="input-box" style={{ display: 'flex', marginRight: '290px' }}>
    <label for="address"className="details"> Address</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="address" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    
  </div>
  <div class="input-box" style={{ display: 'flex' }}>
  <label for="suburb" className="details">Suburb</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="suburb" placeholder="Enter suburb" value={suburb} required onChange={(e)=>setSuburb(e.target.value)}/>
    
    
  </div>
  
  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
  <div class="input-box" style={{ display: 'flex',  marginRight: '290px' }}>
    <label for="postcode" className="details">Postcode</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="postcode" placeholder="Enter postcode" value={postcode} onChange={(e)=>setPostcode(e.target.value)}/>
    
  </div>
  
  <div class="input-box" style={{ display: 'flex' }}>
    <label for="mobile" className="details">Mobile Phone</label>
    <input type="number" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mobile" placeholder="Enter phone number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    
  </div>
  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
  <div class="input-box" style={{ display: 'flex', marginRight: '100px' }}>
    <label for="emergency contact name" className="details">Emergency contact name</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emergencycontactname" placeholder="Enter emergency name" value={emergencycontactname} onChange={(e)=>setEmergencycontactname(e.target.value)}/>
    
  </div>
  <div class="input-box" style={{ display: 'flex' }} >
    <label for="relationship" className="details">Emergency contact relationship</label>
    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="relation" placeholder="Enter relation" value={relation} onChange={(e)=>setRelation(e.target.value)}/>
    
  </div>
  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
  <div class="input-box" style={{ display: 'flex', marginRight: '100px' }}>
    <label for="emergency contact" className="details">Emergency contact number</label>
    <input type="number" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emergencycontact" placeholder="Enter emergency number" value={emergencycontact} onChange={(e)=>setEmergencycontact(e.target.value)}/>
    
  </div>
  <div class="input-box" style={{ display: 'flex' }} >
  <label for="email" className="details">Email address</label>
  <input type="email" autocomplete="off" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
  </div>

  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
  <div class="input-box" style={{ display: 'flex', marginRight: '250px' }}>
  <label for="password" className="details">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} name="password" required onChange={(e)=>setPassword(e.target.value)}/>
    
  </div>
  <div class="input-box" style={{ display: 'flex' }} >
  <label for="status" className="details">Status</label>
    <select className="vw" name="status" value={status} onChange={(e)=>setstatus(e.target.value)} style={{fontSize:'small', marginLeft: '0px' }}>
      <option></option>
      <option>Life Member</option>
      <option>Honorary</option>
      <option>Financial</option>
      <option>Veteran</option>
    </select>
  </div>

  </div>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
  <div class="input-box" style={{ display: 'flex' }} >
  <label for="gender" className="details">Gender</label>
    <select className="vw" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} style={{fontSize:'small', marginLeft: '0px' }}>
      <option></option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
    </select>
  </div>

  </div>

  <div style={{ display: 'flex', marginBottom: '20px', marginLeft:'400px' }}>

  <button type="Update">Update</button>

  </div>

 
  </form>
        </div>



                        


                        
        </div>


        
        
        </div>
    )
}
export default Update;