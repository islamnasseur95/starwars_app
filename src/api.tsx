import axios from 'axios'

const globalApi = axios.create({
    baseURL: process.env.STAR_WARS_APP_API,
})

export default globalApi