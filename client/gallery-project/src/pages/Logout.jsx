import Cookies from 'js-cookie';

export default function Logout(){
    const answer = window.confirm("Yakin untuk logout?");
    if (answer) {
        Cookies.remove('token');
        window.location.href = "/login";
    }else{
        window.location.href = "/admin";
    }
}