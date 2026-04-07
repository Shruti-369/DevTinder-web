import axios from 'axios';
import { useState } from "react";

const Login = () => {

  const [emailId, setEmailId] = useState('lo');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:7777/login", {
      email: emailId,
      password: password,
      rememberMe: rememberMe,
    });
    console.log(res.data);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

  return (
    <div className="flex justify-center mt-10">
    <div className="card bg-base-300 w-96 shadow-sm">
    <div className="card-body">
    <h2 className="card-title font-bold">Login</h2>

    <div>
 <fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Email ID:</legend>
  <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input pl-2" placeholder="Type here" />
 </fieldset>   

 <fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Password:</legend>
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input pl-2" placeholder="Type here" />
 </fieldset> 

 <fieldset className="fieldset">
  <legend className="fieldset-legend p-2">Remember me</legend>
  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="checkbox bg-base-100" />
 </fieldset>
 
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary pl-2 pr-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
