import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage } from "./pages/Home";
import { RegisterPage } from "./pages/Register";
import { LogInPage } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { AccountPage } from "./pages/Account";
import { useState } from "react";



const registeredUsers = [
  {
    email: "a@a.a",
    password: "a"
  },
  {
    email: "b@b.b",
    password: "b"
  }
]


function App() {

  const [registerNewUser, setRegisterNewUser] = useState(registeredUsers)

function registerUser(user){
  setRegisterNewUser((prev)=>[
    ...prev,{
      ...user
    }
  ])
}

const [isLogedIn, setIsLogedIn] = useState([false, ''])

function logIn({email, password}){

  for (let i = 0; i < registerNewUser.length; i++) {
    if(registerNewUser[i]['email']===email && registerNewUser[i]['password']===password){
      setIsLogedIn([true, email])
    }
  }
}

function logOut() {
  setIsLogedIn([false,''])
}



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage logOut={logOut} isLogedIn={isLogedIn[0]}/>}/>
        <Route path="/register" element={<RegisterPage isLogedIn={isLogedIn[0]} registerUser={registerUser}/>}/>
        <Route path="/login" element={<LogInPage isLogedIn={isLogedIn[0]} logIn={logIn}/>}/>
        <Route path="/profile" element={<AccountPage logOut={logOut} isLogedIn={isLogedIn[0]} profileName={isLogedIn[1]}/>}/>
        <Route path="/*" element={<PageNotFound logOut={logOut} isLogedIn={isLogedIn[0]}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
    
}

export default App;
