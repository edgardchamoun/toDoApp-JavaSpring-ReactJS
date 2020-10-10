import Axios from "axios";
import {API_URL} from "../../Constants"

export const USER_SESSION_NAME = "authenticatedUser";

class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        return Axios.get(`${API_URL}/basicauth`, {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthenticationService(username, password) {
        return Axios.post(`${API_URL}/authenticate`, {username, password})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password);
    }

    createJwtToken(token) {
        return 'Bearer ' + token;
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_SESSION_NAME, username);
        console.log(this.isUserLoggedIn());
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulJwtLogin(username, token) {
        sessionStorage.setItem(USER_SESSION_NAME, username);
        console.log(this.isUserLoggedIn());
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    logout() {
        sessionStorage.removeItem(USER_SESSION_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_SESSION_NAME)
        if(user===null) return false
        return true
    }

    getUserLoggedIn() {
        let user = sessionStorage.getItem(USER_SESSION_NAME)
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(JwtHeader) {
        Axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = JwtHeader
                }
                return config;
            } 
        )
    }
}

export default new AuthenticationService()