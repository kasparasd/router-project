import { Header } from "../components/header/Header";
import { LogInForm } from "../components/login/LogInForm";


export function LogInPage({logIn, isLogedIn}){
    return(<>
        <Header isLogedIn={isLogedIn}/>
        <LogInForm logIn={logIn} isLogedIn={isLogedIn}/>

    </>)
}