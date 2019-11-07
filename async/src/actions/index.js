import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetching = () => ({type: START_FETCHING});
export const fetchSuccess = data => ({type: FETCH_SUCCESS, payload: data});
export const fetchFailure = error => ({type: FETCH_FAILURE, payload: error});

export const fetchMonster = () => dispatch => {
    dispatch(fetching())
    axios
        .get("https://api.jikan.moe/v3/anime/19/episodes")
        .then(res => {
            console.log("success",res.data.episodes)
            dispatch(fetchSuccess(res.data.episodes))
        })
        .catch(err => dispatch(fetchFailure(err.message)))

    // dispatch({type: START_FETCHING})
    // axios
    //     .get("https://api.jikan.moe/v3/anime/19/episodes")
    //     .then(res => {
    //         console.log("success",res.data.episodes)
    //         dispatch({type: FETCH_SUCCESS, payload: res.data.episodes})
    //     })
    //     .catch(err => dispatch({type: FETCH_FAILURE, payload: err.message}))
}