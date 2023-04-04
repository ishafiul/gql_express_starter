import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import { config } from "dotenv";
import figlet from "figlet";
import { ApolloServer } from "@apollo/server";
import { schema } from "./schema.js";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from "@apollo/server/express4";
const app = express();
export const httpServer = createServer(app);
app.use(express.json());
config();
app.use(cors({
    origin: "*"
}));
mongoose.connect(process.env.MONGO_URL || '').then(() => console.log('connected to mongodb'));
app.get('/', (req, res) => {
    figlet('ishaf', {
        font: 'Doh',
    }, (err, data) => {
        res.send(`<div style='font-size: 10px;margin: auto;
        border: 3px solid #E8E8E8;
        display:flex;
        justify-content: center;
        background-color: #F5F5F5;
        padding: 10px; '><pre>${data} </pre></div>`);
    });
});
const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(expressMiddleware(server));
//# sourceMappingURL=app.js.map