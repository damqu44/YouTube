//
// import { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const mongoClient = new MongoClient('mongodb+srv://damqu44:damcio3986@cluster0.hze3udi.mongodb.net/');
//         await mongoClient.connect();
//         console.log('Connected to MongoDB');
//
//         const data = await mongoClient.db().collection('test').find({}).toArray();
//         console.log('Data fetched:', data);
//
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error connecting to MongoDB or fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// // Import necessary modules
// import { NextApiRequest, NextApiResponse } from 'next';
// import admin from 'firebase-admin';
// import path from 'path';
// const response = await import('./firebaseConfig.json');
//
//
// // Specify the path to your service account key JSON file
// const serviceAccountKeyPath = path.join(process.cwd(), './firebaseConfig.json');
//
// // Initialize Firebase Admin SDK using service account credentials
// const serviceAccount = require(serviceAccountKeyPath);
//
// // Check if Firebase app is already initialized
// if (!admin.apps.length) {
//     admin.initializeApp({
//         credential: admin.credential.cert(serviceAccount),
//         databaseURL: "https://your-database-url.firebaseio.com"
//     });
// }
//
// // Your API endpoint
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         // Access the Firestore database
//         const db = admin.firestore();
//
//         console.log('Connected to Firebase');
//
//         // Fetch data from a collection in Firestore
//         const snapshot = await db.collection('Videos').get();
//         const data = snapshot.docs.map(doc => doc.data());
//
//         console.log('Data fetched:', data);
//
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error connecting to Firebase or fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import firebase from '@/../firebase';
// import 'firebase/database'
// import axios from 'axios';
//
// export default async (req: NextApiRequest, res:NextApiResponse) => {
//     try {
//         const videosSnapshot = await firebase.database().ref('Videos').once('value');
//         const channelsSnapshot = await firebase.database().ref('Channels').once('value');
//
//         const videos = videosSnapshot.val();
//         const channels = channelsSnapshot.val();
//
//         const data = { Videos: videos, Channels: channels };
//
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// pages/api/test.ts
// import { getData } from "@/lib/firebase/auth";
// import {NextApiRequest, NextApiResponse} from "next";
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const exampleData = await getData();
//         res.status(200).json(exampleData);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }