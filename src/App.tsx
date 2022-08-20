import {Counter} from "./Components/Counter";
import {User} from "./Components/User";
import {TimerParent} from "./Components/TimerParent";
import {CounterRed} from "./Components/CounterRed";

function App() {
  return (
    <>
        <h1>UseState</h1>
        <hr/>
        <Counter />
        <User />
        <h1>useEffect - useRef</h1>
        <hr/>
        <TimerParent />
        <h1>useReducer</h1>
        <hr/>
        <CounterRed />
    </>
  );
}

export default App;
