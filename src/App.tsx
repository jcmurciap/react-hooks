import {Counter} from "./Components/Counter";
import {User} from "./Components/User";
import {TimerParent} from "./Components/TimerParent";

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
    </>
  );
}

export default App;
