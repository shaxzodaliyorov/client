import { API } from "../../API/Config";
import { getItem } from "../../localStorge";
const Auth = {
    async Register(user) {
        const { data } = await API.post('/auth/register', user)
        return data
    },
    async Login(user) {
        const { data } = await API.post('/auth/login', user)
        return data
    },
    async GetUser() {
        const token = getItem('token') ? getItem('token') : ''
        const { data } = await API.get('/user', {
            headers: { "authorization": `${token}` }
        })
        return data
    }
}

export default Auth