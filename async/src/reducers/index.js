import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';


const initialState = {
    episodes: [],
    isFetching: false,
    error: ""
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
                episodes: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;