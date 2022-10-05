import React from 'react'
import { Link, redirect,Navigate ,RedirectFunction} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Form from './Form';

import Search from './Search';
function Login() {
  
  const [userid , newuserid] = React.useState("vishu");
  const [username, newusername] = React.useState("");
  const [state,newstate] = React.useState(false);
  const [login,newlogin] = React.useState("Login");
  const[button,newbutton] = React.useState(true);
  const[profiles,newprofile] = React.useState("Namastey Mitra");
  const navigate = useNavigate();
 function handle(event)
 {
     newusername(event.target.value);
 }
 function handle1(event)
 {
     newuserid(event.target.value);
 }
 React.useEffect(() => {
  check()
}, [])



function check()
{
    if(localStorage.getItem("name")!=null)
    {
      newstate(true);
    }
    else
    {
      newstate(false);
    }
}



function authenticate()
{

    if(userid == "vidushi2002" || userid =="lokendra1204" || userid =="saksham1210" || userid == "shiv8909" || userid =="SnShukla0101"|| userid=="Ramapati0101" || userid =="Piyush0101" )
    {

      const x = userid;
      const y = userid.length-4;
   
       const name = x.substring(0,y);
       const ghats = x.substring(userid.length-2,userid.length-1);
       console.warn(name);
        newusername(name);
        newprofile(name);
        alert("Success");
        newlogin("LOGGED IN ")
        newstate();
        newstate(true);
        newbutton(false);
        console.warn(y);
        localStorage.setItem('name', JSON.stringify({name}));
        localStorage.setItem('ghats', JSON.stringify({ghats}));

    }
    else
    {
        alert("check your U-ID again")
        newstate(false);
    }
    
}
function unauthenticate()
{
    newuserid("");
    if(userid == "vidushi2002" || "Aayush2000")
    {
      
        
        newlogin("LOGGED IN ")
        newstate(false);
    }
  


  
    document.getElementById("pwd").value = "";
    newlogin("LOG-IN");
}
 


function profile()
{
    if (button == true) {
        newbutton(false);
    } else {
        newbutton(true);
    }
}


if(state==false)
{
  return (

<div className="container">
    <div className="card">
      <img src="diya.jpeg" alt="" />
      <h3>Enter Chat ID</h3>
      <input className="input-area" type="text"   onChange={handle1} />
      <button className="btn"   onClick={authenticate}>Go to chats</button>
    </div>
  </div>








//   <div>
//     <button className= "btn btn-success"  onClick={profile}> {profiles} </button>
//     <div className="wrapper">
//   <div className="text-center mt-4 name">Enter Chat-ID</div>   
//     <div className="form-field d-flex align-items-center">
//       <span className="fas fa-key" />
//       <input  name="password" id="pwd" placeholder="User ID " onChange={handle1} />
//     </div>
//     <button className="btn mt-3"  onClick={authenticate}>{login}</button>    
 
// </div>
//   </div>

  )
}
else if(state==true){
   return  (<div>
        <Search/>
    </div>)
}

}

export default Login