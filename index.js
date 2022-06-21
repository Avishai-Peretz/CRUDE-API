
import mongoose from 'mongoose';
import {app} from './app/app.js';

const URL = "mongodb://localhost:27017/AppleSeedsCRUDE";

mongoose.connect(URL, (error, mongoDBInstance) => {
    if (error) throw new Error("MongoDB Connection Error: " + error);
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
        const { host, port, name } = mongoDBInstance;
        console.log({ host, port, name });
    }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, (error) => {
    if (error) throw new Error("app.listen Error: " + error);
    console.log("server is up and running on port " + PORT);
});