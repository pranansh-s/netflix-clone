import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_PATH = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=`;

const initialState = { }

const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        tvSet: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        }
    }
});

export const tvSetAsync = (genre) => async (dispatch) => {
    let response;
    switch (genre) {
        case "ACTION ADVENTURE":
            response = await axios.get(`${BASE_PATH}10759`);
            break;
        case "ANIMATION":
            response = await axios.get(`${BASE_PATH}16`);
            break;
        case "COMEDY":
            response = await axios.get(`${BASE_PATH}35`);
            break;
        case "CRIME":
            response = await axios.get(`${BASE_PATH}80`);
            break;
        case "DOCUMENTARY":
            response = await axios.get(`${BASE_PATH}99`);
            break;
        case "DRAMA":
            response = await axios.get(`${BASE_PATH}18`);
            break;
        case "FAMILY":
            response = await axios.get(`${BASE_PATH}10751`);
            break;
        case "KIDS":
            response = await axios.get(`${BASE_PATH}10762`);
            break;
        case "MYSTERY":
            response = await axios.get(`${BASE_PATH}9648`);
            break;
        case "NEWS":
            response = await axios.get(`${BASE_PATH}10763`);    
            break;
        case "REALITY":
            response = await axios.get(`${BASE_PATH}10764`);
            break;
        case "SCI-FI FANTASY":
            response = await axios.get(`${BASE_PATH}10765`);
            break;
        case "SOAP":
            response = await axios.get(`${BASE_PATH}10766`);
            break;
        case "TALK":
            response = await axios.get(`${BASE_PATH}10767`);
            break;
        case "WAR POLITICS":
            response = await axios.get(`${BASE_PATH}10768`);
            break;
        case "WESTERN":
            response = await axios.get(`${BASE_PATH}37`);
            break;
    }
    dispatch(tvSet({key: genre, value: response.data.results}));
}

export const { tvSet } = tvSlice.actions;
export default tvSlice.reducer;