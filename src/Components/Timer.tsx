import {useEffect, useRef, useState} from "react";

type TimerArgs = {
    miliseconds: number,
    seconds?: number
}

export const Timer = ({miliseconds}: TimerArgs) => {

    const [seconds, setSeconds] = useState(0);

    /*
     * Crea una referencia que sin importar cuantas veces se
     * reconstruya el componente, siempre será el mismo puntero
     * en memoria
     */
    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {
        //Cada vez que cambie miliseconds, se va a limpiar el intervalo
        clearInterval(ref.current);

        ref.current = setInterval(
            () => setSeconds(current => current + 1 ),
            miliseconds)
    }, [miliseconds])

    return (
        <>
            <h4>Timer: <small>{seconds}</small></h4>
        </>
    )
}