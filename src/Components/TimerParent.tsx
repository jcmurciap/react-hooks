import {Timer} from "./Timer";
import {useState} from "react";

export const TimerParent = () => {

    const [miliseconds, setMiliseconds] = useState(1000);

    return (
        <>
            <span>Milisegundos {miliseconds}</span>
            <br/>
            <button
                className="btn btn-outline-success m-1"
                onClick={() => setMiliseconds(1000)}
            >
                1000
            </button>
            <button
                className="btn btn-outline-success m-1"
                onClick={() => setMiliseconds(2000)}
            >
                2000
            </button>
            <Timer miliseconds={miliseconds}/>
        </>
    )
}