import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import AuthenticationApp from './AuthenticationApp/AuthenticationApp'

function App() {

   const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)

   if(token){
    return <AuthenticationApp/>;
   }else{
    return <Login setToken={setToken}/>
   }
}

export default App
