import { Header } from "../header/Header";

export function NotAuthorized(){
    return(
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
        <h1>401 Unauthorized. Please Log in or register</h1>
    </div>
    </>
    )
}