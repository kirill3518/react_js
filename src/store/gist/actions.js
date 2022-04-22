import { apiUrl } from "../../utils/constants";

export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
});

export const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data
});

export const getGistsFailure = (error) => ({
    type: GET_GISTS_FAILURE,
    payload: error
});

export const getGists = () => async (dispatch) => {
    try {
        dispatch(getGistsRequest());

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response failed with status ${response.status}`);
        }

        const result = await response.json();
        dispatch(getGistsSuccess(result));
    } catch (e) {
        console.warn(e);
        dispatch(getGistsFailure(e.message));
    }
};