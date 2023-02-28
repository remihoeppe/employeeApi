import axios from "axios";

export default axios.create({
    baseURL:
        "http://employeecreatorapi-env.eba-jzri62fd.us-east-2.elasticbeanstalk.com/",
    withCredentials: false,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:8080/",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
