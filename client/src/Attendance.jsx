import axios from 'axios';
import {Link, useNavigate,useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import moment from 'moment';
import './dashboard.css';




function Attendance(){
    const{id}=useParams() 
    const[clk1,setClk1]=useState();
    const[clk2,setClk2]=useState();
    const[dif,setDif]=useState();
    const[dm,setDm]=useState();
    const[nm,setNm]=useState([])
    const[record,setRecord]=useState([])
    const[uid,setUid]=useState();
    const[con,setCon]=useState();
    const navigate = useNavigate();
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getAllUser')
        .then((res)=>{
            const cnt=res.data
            console.log(cnt) 
            setNm(cnt)
            setRecord(cnt)
        }).catch(err=>console.log(err))
    },[])
    console.log(con);
    const date = moment().format("MMM Do YY");  
    console.log(date);  
    function clock(nid){
    const timestamp = Date.now();
    const clk=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
    setClk1(clk); 
    console.log(nid);
    setUid(nid);
    console.log(timestamp);
    console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
    }
    function clock1(nid){
        const timestamp = Date.now();
        const clk=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
        setClk2(clk); 
        console.log(nid);
        setUid(nid);
        console.log(timestamp);
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        }
    /*function diff(clkoff,clkon){
        const timm=moment.utc(moment(clkoff,"HH:mm").diff(moment(clkon,"HH:mm"))).format("HH:mm");
        setDif(timm);

    }*/
    function minuteConverter(clkoff,clkon,nid) {
        var time=moment.utc(moment(clkoff,"HH:mm").diff(moment(clkon,"HH:mm"))).format("HH:mm");
        var value=0;
        const [h, m] = time.split(':');
        value = +h+m / 60;
        const val=value.toFixed(2);
        console.log(val)
        console.log(val*2);
        setUid(nid);
        setDm(val*2);
    }
    function sp(){
        alert('hit space in time field to save');
    }
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
            <button><Link to={`/Aat/${id}`}>View today data</Link></button>
            <button><Link to={`/Arcd/${id}`}>View recorded data</Link></button>  
        </div>
        <input type="text" className='form-control' onChange={Filter} placeholder="Search"/>
        <div class="report-body"></div> 

 
  
            
            
            
            
            <table id="AT">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Clock On</th>
            
                </tr>
                </thead>
                {console.log(nm.data)}
                <tbody>
                
                
            
            {record&&record.data?.map((ab) => {
                return(
                    <tr>
                    <td > {ab.name} </td>
                    <td >{moment(ab.dob).utc().format('DD/MM/YY')}</td>
                    <td >{ab.gender}</td>
                    <td><button><Link to={`/Tm/${ab._id}`}>Clock</Link></button></td>
                    
                    
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
export default Attendance;