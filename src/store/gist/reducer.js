import { FETCH_STATUSES } from "../../utils/constants";
import { GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "./actions";

const initialState = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null
};

export const gistsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_GISTS_REQUEST: {
            return { ...state, status: FETCH_STATUSES.REQUEST, error: null };
        }
        case GET_GISTS_FAILURE: {
            return { ...state, status: FETCH_STATUSES.FAILURE, error: payload };
        }
        case GET_GISTS_SUCCESS: {
            return { ...state, status: FETCH_STATUSES.SUCCESS, data: payload };
        }
        default:
            return state;
    }
};