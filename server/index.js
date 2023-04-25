import { connectedDB } from "./db.js";
import { PORT } from "./config.js";
import app from "./app.js";

connectedDB();

app.listen(PORT);
console.log("Server running on port ", PORT);
