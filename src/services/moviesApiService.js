import axios from 'axios';

const baseUrl = "http://localhost:3000"

export const movieService = {
    getAll() {
        return axios.get(baseUrl + "/movies")
    },
    save(data) {
        return axios.post(baseUrl + "/movies", data)
    },
    getById(id) {
        return axios.get(baseUrl + "/movies/" + id)
    },

}