import express from 'express';
import bodyParser from 'body-parser';

import notificationsRoutes from './routes/notifications';
import notificationsMiddleware from "./middlewares/notifications";
import cors from "./middlewares/cors";
import contentType from "./middlewares/contentType";
import eventsRoutes from "./routes/events";
import eventsMiddleware from "./middlewares/events";

export default express()
    .use(bodyParser.json())
    .use(cors)
    .use(contentType)
    .use('/notifications', notificationsMiddleware)
    .use('/notifications', notificationsRoutes)
    .use('/events', eventsMiddleware)
    .use('/events', eventsRoutes);