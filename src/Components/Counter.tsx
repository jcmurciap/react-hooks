import {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const onClick = (increment:number) => {
        setCounter(counter + increment);
    }
    const onClear = () => {
        setCounter(0);
    }

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br />
            <button className="btn btn-outline-primary m-2" onClick={() => onClick(1)}>
                + 1
            </button>
            <button className="btn btn-outline-primary m-2" onClick={() => onClick(2)}>
                + 2
            </button>
            <button className="btn btn-outline-danger m-2" onClick={onClear}>
                Clear
            </button>
        </div>
    )
}