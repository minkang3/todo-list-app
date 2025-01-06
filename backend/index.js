import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "TodoList",
    password: "qwe123",
    port: 5432,
});

db.connect();

app.use(cors());

app.get("/", async (req, res) => {
    console.log("Request received!");
    try {
        const query = await db.query("SELECT * FROM tasks");
        res.send(query);
    } catch (err) {
        console.log(err);
    }
    //res.send("Hello from backend");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
