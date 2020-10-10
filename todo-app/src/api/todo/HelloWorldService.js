import Axios from "axios";
import {API_URL} from "../../Constants.js";

class HelloWorldService {
    executeHelloWorldService() {
        console.log("executed service");
        return Axios.get(`${API_URL}/hello-world`);
    }

    executeHelloWorldBeanService() {
        console.log("executed service");
        return Axios.get(`${API_URL}/hello-world-bean`);
    }

    executeHelloWorldPathVariableService(name) {
        console.log("executed service");
        return Axios.get(`${API_URL}/hello-world/path-variable/${name}`, 
        //{
            //headers: {
            //    authorization: basicAuthHeader
            //}
        //}
        );
    }
}

export default new HelloWorldService()