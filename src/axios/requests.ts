import axios from "axios";


const baseConfig = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})


export const newsApi = {
    fetchPosts () {
        return baseConfig.get('todos')
    }
}