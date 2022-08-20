import {useReducer} from "react";

const initialState = {
    contador: 0,
}

type ActionType =
    | {type: 'incremental'}
    | {type: 'decremental'}
    | {type: 'custom', payload:number}

const contadorReducer = (state:typeof initialState, action:ActionType) => {
    switch (action.type) {
        case "incremental":
            return {
                ...state,
                contador: state.contador + 1,
            }
        case "decremental":
            return {
                ...state,
                contador: state.contador - 1,
            }
        case "custom":
            return {
                ...state,
                contador: action.payload,
            }
        default:
            return state; // En caso que no se ejecute en algún "case"
    }
}

export const CounterRed = () => {

    // Is usually preferable to useState when you have complex state logic that involves multiple sub-values.
    const [counterState, dispatch] = useReducer(contadorReducer, initialState);

    return (
        <>
            <h2>Counter: {counterState.contador}</h2>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({type: "incremental"})}
            >
                + 1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({type: "decremental"})}
            >
                - 1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({type: "custom", payload:100})}
            >
                100
            </button>
        </>
    )
}