import {useState} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";
import './login.css';

function Login()
{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    const handleSubmit = (e) =>{
        e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(res=>{
      //navigate('/login')
      if(res.data.Status==="Success"){
        if(res.data.role==="admin"){
           

          navigate(`/Dashboard/${res.data.id}`)
          console.log(res.data.id)
        }else{
          navigate(`/Cmsuser/${res.data.id}`)
        }
      }
    }).catch(err=>console.log(err))
    }
  return(
         <div className="login-wrap">
          <div className="login-html">
          <label for="tab-1" class="tab">Sign In</label>
          <div className="login-form">
          <div className="sign-in-htm">
          <form onSubmit={handleSubmit}>
            <div className="group">

               <label for="email" className="label">Email address</label>
    <input type="email" autocomplete="off" className="input" id="user" aria-describedby="emailHelp" name="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
   
  </div>
  <div className="group">
    <label for="password" className="label">Password</label>
    <input type="password" className="input" id="pass" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="group">
  <input type="submit" className="button" value="Sign In"/>
  </div>
  <div className="hr"></div>
  
            </form>
            </div>
          </div>
          </div>
         </div>
  );
}
export default Login;