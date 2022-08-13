import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
});

export const RequestAPI = {

    postRequest(success: boolean) {
        return instance.post('auth/test', {success: success})
    }

}