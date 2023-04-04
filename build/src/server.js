import { httpServer } from "./config/app.js";
const port = process.env.PORT || 8001;
httpServer.listen(port, () => console.log(`server running at http://localhost:${port}`));
//# sourceMappingURL=server.js.map