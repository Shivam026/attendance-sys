import axios from 'axios';
import {Link, useNavigate,useParams} from "react-router-dom";
import {useState,useEffect,useRef} from "react";
import moment from 'moment';
import {useDownloadExcel} from 'react-export-table-to-excel';
import './dashboard.css';
function Aat(){
    const{id}=useParams()
    const[nm,setNm]=useState([])
    const[record,setRecord]=useState([])
    const tableref=useRef(null)   
    const navigate = useNavigate();
         
    const {onDownload}=useDownloadExcel({
        currentTableRef:tableref.current,
        filename:'user_info'+`${moment().format("MMM Do YY")}`,
        sheet:'UserData'
    })
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getAllUser')
        .then((res)=>{
            const cnt=res.data
            console.log(cnt) 
            setNm(cnt)
            setRecord(cnt)
        }).catch(err=>console.log(err))
    },[])
    const Filter=(event)=>{
        const va=nm.data?.filter(f=>f.name.toLowerCase().includes(event.target.value))
        setRecord({data:va});
    
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
      
      <div class="report-container-1"> 
        <div class="report-header"> 
            <h1 class="recent-Articles">Attendance</h1>
            <button onClick={onDownload}>Export data</button>  
        </div>
        <input type="text" className='form-control' onChange={Filter} placeholder="Search"/>
        <div class="report-body"></div>
        <table id="AT" ref={tableref}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Clock On</th>
                    <th>Clock Off</th>
                    <th>Contribution</th>
            
                </tr>
                </thead>
                {console.log(nm.data)}
                {console.log(record)}
                <tbody>
                
                
            
            {record&&record.data?.map((ab) => {
                return(
                    <tr>
                    <td > {ab.name} </td>
                    <td>{moment().format("MMM Do YY")}</td>
                    <td >{ab.clockon}</td>
                    <td >{ab.clockoff}</td>
                    <td >{ab.contri}</td>
                    
                    
                    </tr>  
                )
            })}
            
            </tbody>
            </table>
      </div>
      </div>
      </div>

    )
}
export default Aat;