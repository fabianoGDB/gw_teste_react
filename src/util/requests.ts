import axios from "axios";
import qs from "qs";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "htt://localhost:8080";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "api-secret";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "api-secret";


type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {
    const headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData
    })

    return axios({method:'POST', baseURL: BASE_URL, url: "rota login", data: data, headers: headers})
}