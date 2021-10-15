import mongoose from 'mongoose';
import { func } from 'prop-types';

const connection = {}

async function connect() {

    // checking prev connections 

    if(connection.isConnected) {
        console.log('already connected!')
        return;
    }

    if (mongoose.connections.length > 0 ) {
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1) {
            console.log('use previous connection!')
            return;
        }
        await mongoose.disconnect()
    }

    // connect to database

    const db = await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('new connection')
    connection.isConnected = db.connections[0].readyState;
}


// setup disconnect 
async function disconnect() {
    if(connection.isConnected) {
        if(process.env.NODE_ENV === 'production') {
            connection.isConnected = false;
        } else {
            console.log('not disconnected')
        }
    }
}

const db = {connect, disconnect};
export default db;