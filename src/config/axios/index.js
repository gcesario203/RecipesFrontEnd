import axios from 'axios'

const axiosCommunication  =  axios.create({
    baseURL:"http://localhost/3333"
})

export default axiosCommunication;