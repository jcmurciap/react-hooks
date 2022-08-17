import {useState} from "react";

export const User = () => {

    interface User {
        id: number;
        name: string;
    }

    const [user, setUser] = useState<User>();

    const onLogin = () => {
        setUser({id:123,name:"Juan"});
    }

    return (
        <div className="mt-2">
            <br/>
            <h3>User: useState + Interface</h3>
            <button className="btn btn-outline-primary mb-2" onClick={onLogin}>
                Login
            </button>
            {
                (!user) ? <pre>Empty user</pre> : <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    )
}