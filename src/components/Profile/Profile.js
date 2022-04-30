import '../../App.styles.scss';
import './Profile.styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { Form } from '../Form/Form';
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from '../../store/profile/selectors';
import { usePrev } from '../../utils/usePrev';

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const prevName = usePrev(name);
    console.log(prevName);

    const handleSubmit = (text) => {
        dispatch(setName(text));
    }

    return (
        <>
            <div className='App-header'>
                <h3>Profile</h3>
                <button onClick={onLogout}>LOGOUT</button>
                <button onClick={handleClick}>change show name</button>
                <Form onSubmit={handleSubmit} />
                {showName && <span>{name}</span>}
            </div>
        </>
    );
};