import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../../store/gist/actions";
import { selectGists, selectGistsError, selectGistsStatus } from "../../store/gist/selectors";
import { FETCH_STATUSES } from "../../utils/constants";

export const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const status = useSelector(selectGistsStatus);

    const sendRequest = () => {
        dispatch(getGists());
    };

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <div className='App-header'>
                <h3>Gists</h3>
                <button onClick={sendRequest}>Get</button>
                {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
                {error && <h4>{error}</h4>}
                <ul>
                    {gists.map((gist) => (
                        <li key={gist.id}>{gist.url}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}