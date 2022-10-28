import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
