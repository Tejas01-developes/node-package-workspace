import express from 'express';
import dbconnection from '@packages/databaseconnect';
import router from './routes/routes.js';
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use("/apis", router);
app.listen(3000, async () => {
    await dbconnection.connect();
    console.log("server started on the port 3000");
});
//# sourceMappingURL=app.js.map