import '../../App.styles.scss';
import './Profile.styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    return (
        <>
            <div className='App-header'>
                <h3>Profile</h3>
                {/* <button onClick={handleClick}>change show name</button> */}
                <label className='Profile-label' >
                    <input type="checkbox" checked={state.showName} onChange={handleClick}></input>
                    <span>change show name</span>
                </label>
                {state.showName && <span>{state.name}</span>}
            </div>
        </>
    );
};