import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors({
    origin: "localhost:8800",
}));

app.listen(8800, () =>{
    console.log("Believe it");
})