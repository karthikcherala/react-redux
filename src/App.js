import Login from "./components/Login";
import Memos from "./components/Memos";
import {useSelector} from "react-redux";
import Header from "./components/Header";
import {Container} from "react-bootstrap";

export function App({
                        _Login = Login, _Memos = Memos, _Header = Header,
                        _useSelector = useSelector
                    }) {
    const isLoggedIn = _useSelector(state => state.isLoggedIn)

    if (isLoggedIn)
        return <Container>
            <_Header/>
            <_Memos/>
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