import api from "./api";

export const signup = (user) => {
    const url = "/signup";
    return api.post(url, user)
}
export const signin = (user) => {
    const url = "/signin";
    return api.post(url, user)
}
export const getAll = () => {
    const url = "/users";
    return api.get(url)
}