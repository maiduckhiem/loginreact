import api from "./api";

export const signup = (user) => {
    const url = "/signup";
    return api.post(url, user)
}
export const signin = (user) => {
    const url = "/signin";
    return api.post(url, user)
}