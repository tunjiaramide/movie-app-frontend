import axios from 'axios';

export const getAllMovies = async() => {
    const { data } = await axios.get('/movies');
    return data;
}

export const getSingleMovie = async(id) => {
    const { data} = await axios.get(`/movies/${id}`);
    return data;
}



export const addMovie = async(movie) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ''
    }
    const { data } = await axios.post('/movies', movie, { headers: headers })
    return data; 
}