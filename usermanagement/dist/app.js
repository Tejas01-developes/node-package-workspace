import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log("server started on the port 3000");
});
//# sourceMappingURL=app.js.map