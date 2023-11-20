import { Header } from "../components/header/Header";

export function PageNotFound({isLogedIn, logOut}){
    return(
        <>
        <Header logOut={logOut} isLogedIn={isLogedIn}/>
        <div style={{display: "flex", justifyContent: "center"}}>
        <h1>404 Page not found</h1>
        </div>
        </>
    )
}