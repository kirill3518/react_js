import { gistsReducer } from "../reducer";
import { FETCH_STATUSES } from "../../../utils/constants";
import { GET_GISTS_SUCCESS } from "../actions";

describe("Reducer gistsReducer", () => {
    it("Type GET_GISTS_SUCCESS", () => {
        const expected = {
            data: [],
            status: FETCH_STATUSES.SUCCESS,
            error: null
        };
        const initialState = {
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: null
        };

        const obj = {
            type: GET_GISTS_SUCCESS,
            payload: []
        }
        const received = gistsReducer(initialState, obj);
        expect(received).toEqual(expected);
    });
});