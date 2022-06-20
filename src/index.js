import { app } from "./app.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST

app.listen(PORT, () => console.log(`\n- [ APP ] Running at http://${HOST}:${PORT}`));
