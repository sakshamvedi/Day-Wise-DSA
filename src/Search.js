import { async } from '@firebase/util';
import { doc, DocumentSnapshot } from 'firebase/firestore';
import React from 'react'
import Navbar from './Navbar'
import services from './services';
import {db} from "./firebase";

function Search() {

    const [info,newinfo] = React.useState([]);
    const [search,newsearch] = React.useState(" ");
    const [arr,newarr] = React.useState([]);
    function handlechange(event)
    {
  newsearch(event.target.value);
    }
    React.useEffect(()=>{
      getinfo()
    },[]);
   
  
    const getinfo = async()=>
    {
        console.log("hey")
        const data = await services.getAllchat();
        console.log(data.docs);
       
        newinfo(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

    function queryfun(docs,index)
    {
      return docs.name === "Saksham Vedi";
    }
  function getdate()
  {
  
    var today = new Date();
    var timers = today.getHours() + ":Hrs " + today.getMinutes() + ":Mns ";
    console.log(timers);
  }

  const deletehandler = async (id) => 
{
    await services.deletebook(id);
      getinfo();
}
var today = new Date();
var timers = today.getHours() + ":Hrs " + today.getMinutes() + ":Mns ";

const [name , newname] = React.useState("");
const [ghat,newghat] = React.useState("");
const [time,newtime] = React.useState("");
const [message,newmessage] = React.useState("");
const [times,newtimes] = React.useState(timers);

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
getinfo();
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
    <div>
    <form className='inputbox'>
    
  
    <input onChange={usercode} placeholder='enter tex mesage.' className='input-msg'></input>
    <button onClick = {submitdata} className='btn-in'>></button>
    </form>
    
        <div className='box'>

{info.map((docs,index)=>
{
  return (

    <>
    <div className="card border  mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">
              {docs.spect}</div>
            <div className="card-body text-danger">
               <h5 className="card-title">{docs.message}</h5>
               <span className="badge rounded-pill text-bg-success">Ghat no : {docs.lenovo}</span>
       
            </div>

            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {docs.times}
    <span class="visually-hidden">{docs.times}</span>
  </span>
  <button className = "btn btn-danger"  onClick={(e)=> deletehandler(docs.id)    }  >Delete Chat</button>
          </div>
    </>
  )
}) 

}




{/* 
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Question</th>
      <th scope="col">Authors</th>
      <th scope="col">Solution</th>
    </tr>
  </thead>
  <tbody>

        {

            info.map((docs,index)=>
            {
                console.log("hey")
                
                return(
<>
    <tr>
      <th scope="row">{index}</th>
      <td>{docs.code}</td>
      <td>{docs.name}</td>
      <td><a href={docs.url}>Visit Solution</a></td>
      <td>{docs.cosebox}</td>
    </tr>
  
</>

                     
                    )
            }) 
        }
         </tbody>
</table> */}

        </div>
    </div>
  )
}

export default Search