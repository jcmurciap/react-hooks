import {ChangeEvent, useState} from "react";

/*export function useForm<T>(initState:T){...} 'useForm' de tipo generico,'initState' será
                                              'lo que sea' que le pasen al invocar useForm*/

export const useForm = <T extends Object>(initState:T) => {

    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }
    return {
        formulario, handleChange, ...formulario
    }
}