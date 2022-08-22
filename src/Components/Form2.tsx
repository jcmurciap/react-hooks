import {ChangeEvent, useState} from "react";
import {useForm} from "../hooks/useForm";

export const Form2 = () => {

    /*const [formulario, setFormulario] = useState({codPostal:'', ciudad:''});

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }*/
    interface SetupData{
        codPostal: number;
        city: string
    }

    const {formulario, handleChange} = useForm<SetupData>({
        codPostal:2222, city:'Mosquera'
    })

    const {codPostal, city} = formulario;

    return (
        <>
            <form autoComplete="off">
                <div className="mb-3">
                    <label className="form-label">Código postal:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="codPostal"
                        value={codPostal}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ciudad:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={city}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <pre>{JSON.stringify(formulario)}</pre>
        </>
    )
}