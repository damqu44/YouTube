
//lib/firebase/auth.ts
// const admin = require("firebase-admin");
// const serviceAccount = require("./firebaseConfig.json");
//
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://fir-4b238-default-rtdb.europe-west1.firebasedatabase.app"
// });
//
// async function getData() {
//     const dataRef = admin.database().ref("example");
//
//     try {
//         const snapshot = await dataRef.once("value");
//         const data = snapshot.val();
//         return data;
//     } catch (error) {
//         console.error("Błąd podczas pobierania danych:", error);
//         throw error;
//     }
// }
//
// export { getData };