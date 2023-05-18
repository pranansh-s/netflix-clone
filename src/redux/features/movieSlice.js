import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_PATH = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=`;

const initialState = { }

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        movieSet: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        }
    }
});

export const movieSetAsync = (genre) => async (dispatch) => {
    let response;
    switch (genre) {
        case "ACTION":
            response = await axios.get(`${BASE_PATH}28`);
            break;
        case "ADVENTURE":
            response = await axios.get(`${BASE_PATH}12`);
            break;
        case "ANIMATION":
            response = await axios.get(`${BASE_PATH}16`);
            break;
        case "MYSTERY":
            response = await axios.get(`${BASE_PATH}9648`);
            break;
        case "ROMANCE":
            response = await axios.get(`${BASE_PATH}10749`);
            break;
        case "SCIENCE FICTION":
            response = await axios.get(`${BASE_PATH}878`);
            break;
        case "THRILLER":
            response = await axios.get(`${BASE_PATH}53`);
            break;
        case "WAR":
            response = await axios.get(`${BASE_PATH}10752`);
            break;
        case "WESTERN":
            response = await axios.get(`${BASE_PATH}37`);
            break;
        case "MUSIC":
            response = await axios.get(`${BASE_PATH}10402`);
            break;
        case "HORROR":
            response = await axios.get(`${BASE_PATH}27`);
            break;
        case "HISTORY":
            response = await axios.get(`${BASE_PATH}36`);
            break;
        case "FANTASY":
            response = await axios.get(`${BASE_PATH}14`);
            break;
        case "FAMILY":
            response = await axios.get(`${BASE_PATH}10751`);
            break;
        case "DRAMA":
            response = await axios.get(`${BASE_PATH}18`);
            break;
        case "DOCUMENTARY":
            response = await axios.get(`${BASE_PATH}99`);
            break;
        case "CRIME":
            response = await axios.get(`${BASE_PATH}80`);
            break;
        case "COMEDY":
            response = await axios.get(`${BASE_PATH}35`);
            break;
    }
    dispatch(movieSet({key: genre, value: response.data.results}));
};

export const { movieSet } = movieSlice.actions;
export default movieSlice.reducer;