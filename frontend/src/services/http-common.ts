import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    withCredentials: false,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:8080/",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
