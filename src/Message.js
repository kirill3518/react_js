import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <header className="Message-header">
                My First React Message
                <h3>Hello, {props.name}</h3>
            </header>
        </div>
    );
}
export default Message;