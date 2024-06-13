import Signup from "./signup";
import Login from "./login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Cmsuser from "./Cmsuser";
import Content from "./Content";
import Pinfo from "./Pinfo";
import Update from "./Update";
import Updateevent from "./Updateevent";
import Attendance from "./Attendance";
import Attendanceuser from "./Attendanceuser";
import Re from "./Re";
import Ve from "./Ve";
import Tm from "./Tm";
import Aat from "./Aat";
import Arcd from "./Arcd";
import Veuser from "./Veuser";
import Profileuser from "./Profileuser";
//import Home from "./Home";
function App(){

   return(
      <BrowserRouter>
      <Routes>
         <Route path="/register/:id" element={<Signup />}></Route>
         <Route path="/" element={<Login />}></Route>
         <Route path="/dashboard/:id" element={<Dashboard />}></Route>
         <Route path="/Cmsuser/:id" element={<Cmsuser/>}></Route> 
         <Route path="/content/:id" element={<Content />}></Route>
         <Route path="/profile/:id" element={<Pinfo />}></Route>
         <Route path="/update/:id" element={<Update />}></Route>
         <Route path="/updateevent/:id" element={<Updateevent />}></Route>
         <Route path="/Attendance/:id" element={<Attendance />}></Route>
         <Route path="/Attendanceuser/:id" element={<Attendanceuser />}></Route>
         <Route path="/Re/:id" element={<Re />}></Route>
         <Route path="/Ve/:id" element={<Ve />}></Route>
         <Route path="/Tm/:id" element={<Tm/>}></Route>
         <Route path="/Aat/:id" element={<Aat />}></Route>
         <Route path="/Arcd/:id" element={<Arcd />}></Route>
         <Route path="/Veuser/:id" element={<Veuser />}></Route>
         <Route path="/Profileuser/:id" element={<Profileuser />}></Route>
      </Routes>
      </BrowserRouter>
   )
}



export default App;