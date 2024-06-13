import axios from 'axios';
import {Link, useNavigate,useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import './dashboard.css';
import './pinfo.css';
function Profileuser(){
    const{id}=useParams()
    const[name, setName] = useState()
    const[address, setAddress]=useState()
    const[year, setYear]=useState()
    const[dob, setDob]=useState()
    const[postcode, setPostcode]=useState()
    const[mobile, setMobile]=useState()
    const[emergencycontact, setEmergencycontact]=useState()
    const[relation, setRelation]=useState()
    const navigate = useNavigate();
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getUser/'+id)
        .then((result)=>{
            console.log(result) 
            setName(result.data.name)
            setAddress(result.data.address)
            setYear(result.data.year)
            setDob(result.data.dob)
            setPostcode(result.data.postcode)
            setMobile(result.data.mobile)
            setEmergencycontact(result.data.emergencycontact)
            setRelation(result.data.relation)
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
            
            <div class="nav-option option5"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                    class="nav-img"
                    alt="blog"/> 
                <h3><Link to={`/Veuser/${id}`}> View event</Link></h3> 
            </div> 

            <div class="nav-option option6"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                    class="nav-img"
                    alt="settings"/> 
                <h3><Link to={`/Profileuser/${id}`}> Profile</Link></h3> 
            </div> 

            <div class="nav-option option3"> 
                <img src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                    class="nav-img"
                    alt="report"/> 
                <h3><Link to={`/Attendanceuser/${id}`}>Attendance</Link></h3> 
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
            <th>Address</th>
            <td>{address} </td>
        </tr>
        <tr>
            <th>Year join</th>
            <td>{year}</td>
        </tr>
        <tr>
            <th>Date of Birth</th>
            <td>{dob}</td>
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
            <th>Emergency contact number</th>
            <td>{emergencycontact}</td>
        </tr>
        <tr>
            <th>Emergency contact Relation</th>
            <td> {relation}</td>
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
export default Profileuser;