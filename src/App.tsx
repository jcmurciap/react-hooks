import {Counter} from "./Components/Counter";
import {User} from "./Components/User";
import {TimerParent} from "./Components/TimerParent";
import {CounterRed} from "./Components/CounterRed";
import {Form} from "./Components/Form";
import {Form2} from "./Components/Form2";

function App() {
    return (
        <>
            <h1>UseState</h1>
            <hr/>
            <Counter/>
            <User />
            <h1>useEffect - useRef</h1>
            <hr/>
            <TimerParent/>
            <h1>useReducer</h1>
            <hr/>
            <CounterRed/>
            <hr/>
            <h1>Custom Hooks</h1>
            <Form2/>
            <br/>
        </>
    );
}

export default App;
