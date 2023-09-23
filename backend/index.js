import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.listen(8800, () =>{
    console.log("Believe it");
})