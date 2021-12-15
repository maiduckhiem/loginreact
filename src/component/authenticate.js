export const authenticate = (user) => {
    localStorage.setItem('users', JSON.stringify(user))
}
export const isAuthenticate = () => {
 if(localStorage.getItem('users')){
     return JSON.parse(localStorage.getItem('users'))
 }else{
     return false
 }
}