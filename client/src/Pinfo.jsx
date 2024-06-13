import axios from 'axios';
import {Link, useNavigate,useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import './dashboard.css';
import './pinfo.css';
function Pinfo(){
    const{id}=useParams()
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
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
    const navigate = useNavigate();
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
            setWwc(result.data.wwc)
            setstatus(result.data.status)
            setctee(result.data.c_tee)
            setSuburb(result.data.suburb)
            setGender(result.data.gender)
        }).catch(err=>console.log(err))
    },[])

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
<div class="main"> 

    
<div class="report-container"> 
    <div class="report-header"> 
        <h1 class="recent-Articles">Profile</h1>  
    </div> 

    <div class="report-body"> 

    <div class="table-responsive">
    <table class="table table-bordered">
        <tr>
            <th class='col-md-4'>Name</th>
            <td>{name}</td>
        </tr>
        <tr>
            <th>Year join</th>
            <td>{year}</td>
        </tr>
        <tr>
            <th>Working With Children</th>
            <td>{wwc}</td>
        </tr>
        <tr>
            <th>C/Tee</th>
            <td>{c_tee}</td>
        </tr>
        <tr>
            <th>Date of Birth</th>
            <td>{dob}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{age}</td>
        </tr>
        <tr>
            <th>Gender</th>
            <td> {gender}</td>
        </tr>
        <tr>
            <th>Address</th>
            <td>{address} </td>
        </tr>
        <tr>
            <th>Suburb</th>
            <td>{suburb} </td>
        </tr>
        <tr>
            <th>Postcode</th>
            <td>{postcode}</td>
        </tr>
        <tr>
            <th>Mobile Phone</th>
            <td>{mobile}</td>
        </tr>
        <tr>
            <th>Emergency contact name</th>
            <td>{emergencycontactname}</td>
        </tr>
        <tr>
            <th>Emergency contact number</th>
            <td>{emergencycontact}</td>
        </tr>
        <tr>
            <th>Emergency contact Relation</th>
            <td> {relation}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td> {email}</td>
        </tr>
        <tr>
            <th>Status</th>
            <td> {status}</td>
        </tr>
    
    </table>
</div>

    



    
    
         

             

             

            

        </div> 
    </div> 
</div>

 
  
  </div>  
  </div>

        
    )
}
export default Pinfo;