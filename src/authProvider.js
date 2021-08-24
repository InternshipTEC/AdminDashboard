import axios from "axios";

const authProvider = {
    // authentication
    login: ({ username, password }) =>  {
        return axios.post("http://localhost:3000/auth/login",{
            email:username,
            password
        })
        .then(data=>data.json())
        .then(data=>{console.log(data)})
        .catch(err=>{throw new Error(err)})

    },
    checkError: error => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('auth')
    ? Promise.resolve()
    : Promise.reject(),
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),
};

export default authProvider