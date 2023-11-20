import { Header } from "../components/header/Header";
import { NotAuthorized } from "../components/notAuthorized/NotAuthorized";
import { Profile } from "../components/profile/Profile";


export function AccountPage({logOut, isLogedIn, logIn, profileName }){
    
let renderHtml;

if (isLogedIn) {
    renderHtml = <Profile logIn={logIn} isLogedIn={isLogedIn} profileName={profileName}/>
} else renderHtml = <NotAuthorized/>
    return(<>
        <Header logOut={logOut} isLogedIn={isLogedIn}/>
        {renderHtml}
    </>)
}