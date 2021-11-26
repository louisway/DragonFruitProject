class AuthenticationService {

    login(username, password) {

        let pwd = sessionStorage.getItem(username);
        console.log(pwd);
        if (password === pwd){
            sessionStorage.setItem('authenticateUser', username);
        }

    }

    register(username, password) {
        sessionStorage.setItem(username, password);
    }

    logout() {
        console.log("logout");
        sessionStorage.removeItem('authenticateUser');
    }

    isUserLoggedin() {
        let user = sessionStorage.getItem('authenticateUser');
        if(user === null) return false;
        return true;
    }
}

export default new AuthenticationService();