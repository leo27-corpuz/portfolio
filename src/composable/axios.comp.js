import axios from 'axios';
const axiosIntance = axios.create({
    baseURL: 'http://192.168.100.56:5173',
    // headers:{
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('token')}`,
    // }
})
export default axiosIntance