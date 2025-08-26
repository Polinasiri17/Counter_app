import { TextField,Button } from "@mui/material";
import { useState } from "react";
function RegForm(){
    const [fullname,setFullname] = useState('');
    const [phone,setPhone] = useState('');
     const [email,setEmail] = useState('');
     const [password,setPassWord] = useState('');
    function handlesubmit(event){
       event.preventDefault();
       if(!fullname){
          alert("PLEASE FILL THE REQUIRED FIELD");
          return
       }
       alert("Successfully submitted: \n"+"Fullname: "+fullname+"\nPhone: "+phone+"\nEmail: "+email);
       setFullname('');
       setEmail('');
       setPhone('');
    }
    function handleReset()
{
    setFullname('');
    setEmail('');
    setPassWord('');
    setPhone('');
}    return(
        <div>
           <form onSubmit={handlesubmit} onReset={handleReset}>
            <TextField 
              label="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              fullWidth
              margin="normal"
             ></TextField>

           <TextField 
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              fullWidth
              margin="normal"
           ></TextField>

             <TextField 
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
             ></TextField>

            <TextField 
            type="password"
              label="PassWord"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              required
              fullWidth
              margin="normal"
            ></TextField>

            <Button
            type="submit"
            variant="contained"
            color="primary"
            >Submit</Button>


            <Button
            type="reset"
            variant="contained"
            color="secondary"
            >Reset</Button>
           </form>
        </div>
    );
}
export default RegForm;