import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function setRows() {
            let res = await axios.get("http://localhost:3000/");
            console.log("Running set rows");
            tasks = res.data.rows;
            setTasks(tasks);
        }
        setRows();
    }, []);

    return (
        <div className="m-2">
            <h1 className="text-3xl">Todo List App</h1>
            {tasks.map((task) => <div><input type="checkbox" key={task.id} /><label className="ml-2">{task.description}</label></div>)}
        </div>
    );
}

export default App;
