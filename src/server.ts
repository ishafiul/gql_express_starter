import {httpServer} from "./config/app.js";

const port = process.env.PORT || 8001;
// tslint:disable-next-line:no-console
httpServer.listen(port, () => console.log(`server running at http://localhost:${port}`));