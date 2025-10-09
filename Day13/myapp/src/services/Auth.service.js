

function setAuthUser(user){
    sessionStorage.setItem("authUser",JSON.stringify(user));
}

function getAuthUser(){
    let currentUser = null;
    if(sessionStorage["authUser"] !== null)
    {
        currentUser = JSON.parse(sessionStorage.getItem("authUser"));
    }
    return currentUser;
}

function removeAuthUser(){
    sessionStorage.removeItem("authUser");
}

const AuthService = {
    setAuthUser,
    getAuthUser,
    removeAuthUser
}

export default AuthService;