import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './App.css';

function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
const auth = getAuth();
await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem("user",JSON.stringify(user));
    window.location.href="/home"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode+" "+errorMessage);
  });
  }
  return (
    <form onSubmit={handleSubmit}>
        <label>Email</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type="submit">login</button>
            <a href="/cadastro">Cadastrar</a>
    </form>
  );
}

export default App;
