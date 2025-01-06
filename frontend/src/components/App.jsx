import React, {useState} from "react";
import axios from "axios";

function App() {
    const [msg, setMsg] = useState("");

    async function talkToBackend() {
        try {
            let res = await axios.get("http://localhost:3000/");
            console.log(res.data);
            setMsg(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Todo List App</h1>
            <button onClick={talkToBackend}>Talk to backend</button>
            <p>{msg}</p>
        </div>
    );
}

export default App;
