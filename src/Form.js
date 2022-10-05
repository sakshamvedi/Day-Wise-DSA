import React from 'react'
import services from './services';
import Navbar from './Navbar';
import Search from './Search';
import { use } from 'i18next';
import LocalTime from "local-time"
import Moment from 'react-moment';
import './piyush.css';
import LocaleTime from 'react-locale-time'; 
LocalTime.start()
function Form() {
  const [name , newname] = React.useState("");
  const [ghat,newghat] = React.useState("");
  const [time,newtime] = React.useState("");
  const [message,newmessage] = React.useState("");
  const [times,newtimes] = React.useState("00:hrs : 00 min");

  function username(event)
  {
    newname(localStorage.getItem("token"));
    newghat(event.target.value);
    console.warn(name);
  }
  
  function usercode(event)
  {
   newmessage(event.target.value);
  }
  
  function userurl(event)
  {
    newtime(event.target.value);
  }




  function userbox(event)
  {
   
    newmessage(event.target.value);
  }
const submitdata  = async(e)=>
{

  var today = new Date();
  var timers = today.getHours() + ":Hrs " + today.getMinutes() + ":Mns ";
  console.log(timers);
  newtimes(timers);
  console.log(times);
  var user = JSON.parse(localStorage.getItem('name'));
  var path = JSON.parse(localStorage.getItem('ghats'));
var spect = user.name;
var lenovo = path.ghats;
  alert("data submitted")
  e.preventDefault();
  const chats = {
   spect,
   lenovo,
   times,
   message,
  }
  console.log(chats);
  try {
    await services.addchat(chats);
    
    console.log("able to pass data")
    
  } catch (error) {
    console.error("unable to pass data")
  }


}
    return (
      <>
      <Search/>
     

    <form className='inputbox'>
    
  
      <input onChange={usercode} placeholder='enter tex mesage.' className='input-msg'></input>
      <button onClick = {submitdata} className='btn-in'>></button>
      
      </form>
    </>
 
  )
}

export default Form