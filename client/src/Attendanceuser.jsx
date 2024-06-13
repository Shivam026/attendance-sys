import axios from 'axios';
import {Link, useNavigate,useParams} from "react-router-dom";
import {useState,useEffect,useRef} from "react";
import moment from 'moment';
import {useDownloadExcel} from 'react-export-table-to-excel';
import './dashboard.css';
function Attendanceuser(){
    const{id}=useParams()
    const[name, setName] = useState()
    const[clk1,setClk1]=useState();
    const[clk2,setClk2]=useState();
    const[nm,setNm]=useState([])
    const[record,setRecord]=useState([])
    const tableref=useRef(null)   
    const navigate = useNavigate();
         
   /* const {onDownload}=useDownloadExcel({
        currentTableRef:tableref.current,
        filename:'user_info'+`${moment().format("MMM Do YY")}`,
        sheet:'UserData'
    })*/
    /*useEffect(()=>{
        
        axios.get('http://localhost:3001/getAllUser')
        .then((res)=>{
            const cnt=res.data
            console.log(cnt) 
            setNm(cnt)
            setRecord(cnt)
        }).catch(err=>console.log(err))
    },[])*/
    /*const Filter=(event)=>{
        const va=nm.data?.filter(f=>f.name.toLowerCase().includes(event.target.value))
        setRecord({data:va});
    
    }*/

    useEffect(()=>{
        
        axios.get('http://localhost:3001/getUser/'+id)
        .then((result)=>{
            console.log(result) 
            setName(result.data.name)
            setClk1(result.data.clockon)
            setClk2(result.data.clockoff)
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
        <h1 class="recent-Articles">Attendance</h1>  
    </div> 

    <div class="report-body"> 

    <div class="table-responsive">
    <table class="table table-bordered">
        <tr>
            <th class='col-md-4'>Name</th>
            <td>{name}</td>
        </tr>
        <tr>
            <th>Date</th>
            <td>{moment().format("MMM Do YY")} </td>
        </tr>
        <tr>
            <th>clock on</th>
            <td>{clk1}</td>
        </tr>
        <tr>
            <th>clock out</th>
            <td>{clk2}</td>
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
export default Attendanceuser;