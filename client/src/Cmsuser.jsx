import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useParams,useNavigate} from "react-router-dom";
import './dashboard.css';
function Cmsuser(){
    const{id}=useParams()
    const[suc,setSuc]=useState('hi user1')
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3001/Cmsuser'+id)
        .then(res=>{
      //navigate('/login')
        if(res.data.Status==="Success"){
             setSuc('Success')
        
        }/*else{
           navigate('/')
           }*/
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
        </div>
        </div>
    )
}
export default Cmsuser;