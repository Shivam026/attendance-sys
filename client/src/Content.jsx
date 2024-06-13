import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useNavigate,useParams} from "react-router-dom";
import './dashboard.css';
import moment from 'moment';
function Content(){
    const{id}=useParams()
    const[nm,setNm]=useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getAllUser')
        .then((res)=>{
            const cnt=res.data
            console.log(cnt) 
            setNm(cnt)
        }).catch(err=>console.log(err))
    },[])
    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>{console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
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


<div class="main-1"> 

    
    <div class="report-container-1"> 
        <div class="report-header"> 
            <h1 class="recent-Articles">Members</h1>  
        </div> 

        <div class="report-body"></div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                {console.log(nm.data)}
                <tbody>
                
                
            
            {nm&&nm.data?.map((ab) => {
                return(
                    <tr>
                    <td > {ab.name} </td>
                    <td >{moment(ab.year).utc().format('DD/MM/YY')}</td>
                    <td >{moment(ab.dob).utc().format('DD/MM/YY')}</td>
                    <td >{ab.gender}</td>
                    <td><button><Link to={`/update/${ab._id}`}>Edit</Link></button></td>
                    <td><button onClick={(e)=>handleDelete(ab._id)}>Delete</button></td>
                    </tr>  
                )
            })}
            
            </tbody>
            </table>

    </div>
    </div>
    </div>
    </div>
  )
}
export default Content; 

