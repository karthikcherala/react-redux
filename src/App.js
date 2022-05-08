import Login from "./components/Login";
import Memos from "./components/Memos";
import {useSelector} from "react-redux";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import PrivateMessages from "./components/PrivateMessages";

export function App({
                        _Login = Login, _Memos = Memos,_PrivateMessages = PrivateMessages, _Header = Header,
                        _useSelector = useSelector
                    }) {
    const isLoggedIn = _useSelector(state => state.isLoggedIn)
    const username = _useSelector(state => state.username)

    if (isLoggedIn)
        return <Container>
            <_Header username={username}/>
            <_Memos/>
            <_PrivateMessages/>
        </Container>
    else
        return <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <_Login/>
        </div>
}

export default App;