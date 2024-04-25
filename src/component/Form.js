import React from 'react';
import { useState } from 'react';
import "../component/Form.css";
import { storage,auth,provider } from '../firebase';

const Form = () => {

    const[user,setUser] = useState(null);
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const signIn = ()=>{
        auth.signInWithPopup(provider).then((user)=>{
          setUser(user)
        }).catch(error=>{
          alert(error.message)
        })
      }

 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("data is store in firebase")
    setUser(null);
    setEmail("")
    setName("");
    setPassword("")
    
    

   
  };

  return (
    <>
    {
    user ? (
      <>
       <form className="form" onSubmit={handleSubmit}>
        <h1 style={{textAlign:'center',textTransform:'uppercase',backgroundColor:"orangered",padding:"10px 10px",fontStyle:"italic",color:"whitesmoke",borderRadius:"10px"}}>login form</h1>
        <div className='main-div'>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e)=>{
           setName(e.target.value);
          }}
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
      </div>
      <button className="form-button" type="submit">
        Submit
      </button>
      </div>
    </form>
      </>
    ) : (
      <>
      <div >
      <div className='home-main-div'>
        <div style={{display:"flex",padding:"10px 10%",alignItems:"center",justifyContent:"space-between"}}> 
         <div style={{display:"flex",alignItems:"center",gap:'10px'}}>
         <img src='https://tse1.mm.bing.net/th?id=OIP.lgdmCc6UHAWc27h0o4tSbwHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107' alt='google_drive_logo' width='40px' style={{backgroundColor:"rgb(179, 234, 232)",color:"rgb(179, 234, 232)",borderRadius:"50%"}}></img>
         <h3>Disk</h3>
         </div>
         <div>
          <button onClick={signIn} style={{padding:"10px 40px",borderRadius:"10px",backgroundColor:"rgba(9, 82, 239, 1)",color:"white",border:'none',cursor:"pointer"}}>Log in</button>
         </div>
        </div>
      </div>

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"10px 0px"}}>
        <div style={{width:"40%",padding:"5% 5%",display:'flex',flexDirection:"column",gap:"20px",justifyContent:"center"}}>
             <h1 style={{textAlign:"center",fontStyle:"italic",fontSize:'2.5rem'}}>Easy and secure access to your content</h1>
             <p style={{textAlign:"center",fontStyle:"oblique",fontSize:'1rem'}}>Store, share, and collaborate on files and folders from your mobile device, tablet, or computer</p>
             <button onClick={signIn} style={{padding:"10px 40px",borderRadius:"10px",backgroundColor:"rgba(9, 82, 239, 1)",color:"white",border:'none',width:"150px",margin:'20px 20px',cursor:"pointer"}}>Log in</button>
        </div>
        <div>
          <img src='https://gdisk.vercel.app/landing-splash.jpg' alt='' width='700px' height='450px' style={{borderRadius:"10px"}}></img>
        </div>
      </div>
      </div>
      </>
    )
   }
   
   
   </>
  );
}













    

export default Form;