import { Header } from "../components/header/Header";
import { RegisterForm } from "../components/registerForm/RegisterForm";

export function RegisterPage({registerUser, isLogedIn}){
    return(<>
        <Header isLogedIn={isLogedIn}/>
        <RegisterForm registerUser={registerUser}/>

    </>)
}