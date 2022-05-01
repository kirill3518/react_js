import { getGistsRequest, GET_GISTS_REQUEST } from "../actions";

describe("Action getGistsRequest", () => {
    it("возвращает обьект заданного типа", () => {
        const expected = {
            type: GET_GISTS_REQUEST
        };

        const received = getGistsRequest();

        expect(received).toEqual(expected);
    });
});