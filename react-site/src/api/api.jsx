import axios from "axios";

const Api = axios.create({
    baseUrl: process.env.REACT_APP_API_URL
})
export default Api;