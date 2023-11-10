import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";


export default function validationPage(){
    const token = Cookies.get("token");
    if(!token){
        return false;
    }
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    if(userRole === "admin"){
        return true;
    }
    return false;
}