import { Header } from "../components/header/Header";

export function HomePage({isLogedIn, logOut}){
    return(<>
        <Header logOut={logOut} isLogedIn={isLogedIn}/>
        <div style={{display: "flex", justifyContent: "center"}}>
        <h1>{isLogedIn ? "You are logged in":"You are not logged in"}</h1>
        </div>
    </>)
}