import express from "express";
import notFound from "./app/middleware/notFound";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes/routers";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.use(notFound);

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
