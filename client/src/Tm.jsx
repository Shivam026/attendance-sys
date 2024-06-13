import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useNavigate,useParams} from "react-router-dom";
import moment from 'moment';
import './dashboard.css';
function Tm(){
    const{id}=useParams()
    const[name, setName] = useState()
    const[clk1,setClk1]=useState();
    const[clk2,setClk2]=useState();
    const[dm,setDm]=useState();
    const[da,setDa]=useState();
    const[con,setCon]=useState();
    const navigate=useNavigate()
    useEffect(()=>{
        
        axios.get('http://localhost:3001/getUser/'+id)
        .then((result)=>{
            console.log(result) 
            setName(result.data.name)
            setClk1(result.data.clockon)
            setClk2(result.data.clockoff)
            setDm(result.data.contri)
        }).catch(err=>console.log(err))
    },[])
    const Update = (e) =>{
        e.preventDefault()
    axios.put('http://localhost:3001/updateAttendance/'+id,{name,clk1,clk2,dm})
    axios.post('http://localhost:3001/aregsave',{name,clk1,clk2,da})
    .then(res=>{
      console.log(res)  
      alert('success')
      window.location.reload()
    }).catch(err=>console.log(err))
    }
    /*const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/aregsave',{name,clk1})
        .then(res=>{
          navigate('/')
        }).catch(err=>console.log(err))
       }*/
    function clock(){
        const timestamp = Date.now();
        const clk=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
        setClk1(clk); 
        console.log(timestamp);
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        }
        function clock1(){
            const timestamp = Date.now();
            const clk=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp);
            setClk2(clk); 
            console.log(timestamp);
            console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
            }
            function minuteConverter(clkoff,clkon) {
                var time=moment.utc(moment(clkoff,"HH:mm").diff(moment(clkon,"HH:mm"))).format("HH:mm");
                var value=0;
                const [h, m] = time.split(':');
                value = +h+m / 60;
                const val=value.toFixed(2);
                console.log(val)
                console.log(val*2);
                setDm(val*2);
            }    
        function sp(){
            const d=moment().format("MMM Do YY");
            setDa(d);
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

  
    <div className="report-container-1">
    <div class="report-header"> 
        <h1 class="recent-Articles">Attendance</h1>  
    </div> 
        <form onSubmit={Update}>
        <div style={{ display: 'flex', marginBottom: '20px', marginRight:'20px' }}>
    <div className="input-box" style={{ marginRight: '50px' }}>  
    <label for="name" className="details">Name</label>
    {name}
    {/* <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="name" placeholder="Enter name" readOnly value={name} onChange={(e)=>setName(e.target.value)} /> */}
    </div>
    <div className="input-box" style={{ marginRight: '50px' }} >  
    <label for="name" className="details">Clock On</label>
    <button onSubmit={Update}  onClick={()=>{clock();sp()}}  autocomplete="off" class="form-control" id="Ain"  value={clk1} onChange={(e)=>setClk1(e.target.value)}>clock on</button>
    </div>
    
    <div className="input-box" style={{ marginRight: '50px' }}>  
    <label for="name" className="details">Clock Off</label>
    <button onSubmit={Update} onClick={()=>{clock1();sp()}}   autocomplete="off" class="form-control" id="Ain"  value={clk2} onChange={(e)=>setClk2(e.target.value)}>clock off</button>
    </div>
    <div className="input-box" style={{ marginRight: '50px' }}>  
    <label for="name" className="details" >Contribution</label>
    <button onSubmit={Update} onClick={()=>{minuteConverter(clk2,clk1)}}  autocomplete="off" class="form-control"  value={dm} onChange={(e)=>setDm(e.target.value)}>contribution</button> 
    </div>
    </div>
    <div className="input-box" style={{ display: 'flex', marginBottom: '20px', marginLeft:'200px' }}>  
    <label for="name" className="details"></label>
    <button onSubmit={Update} onClick={()=>{sp()}}  autocomplete="off" class="form-control" id="Ain"  value={da} onChange={(e)=>setDa(e.target.value)}>Submit</button> 
    </div>
    </form>
    </div>
    </div>
    </div>


    )
}
export default Tm;