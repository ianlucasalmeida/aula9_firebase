import { getAuth, signOut } from "firebase/auth";
import './home.css';

export default function Home(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
        window.location.href="/"
    }
    return(<div>
        <h1 class='banner' >Home sweeet home alabama</h1>
        <p>olá {user.email}</p>
        <p>seu id é:{user.uid}</p>
        <button onClick={()=>{

            const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem("user")
            window.location.href="/"
            }).catch((error) => {
                alert(error.message)
            });
        }}>Sair</button>
    </div>);
}