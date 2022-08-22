import {useForm} from "../hooks/useForm";

export const Form = () => {

    interface FormData {
        name: string;
        email: string;
        age: number
    }

    const {name, email, age, formulario, handleChange} = useForm<FormData>({
        name:'camilo', email:'camilo@gmail.com', age:28
    })

    return (
        <>
            <form autoComplete="off">
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Edad:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="edad"
                        value={age}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <pre>{JSON.stringify(formulario)}</pre>
        </>
    )
}