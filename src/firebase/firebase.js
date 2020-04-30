import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyD1kx1u8hdnQn9Rxq14OCU-LLf0s4WaRQY",
//   authDomain: "expensify-e163f.firebaseapp.com",
//   databaseURL: "https://expensify-e163f.firebaseio.com",
//   projectId: "expensify-e163f",
//   storageBucket: "expensify-e163f.appspot.com",
//   messagingSenderId: "328533765489",
//   appId: "1:328533765489:web:b2166a4b218c1b37609ad0",
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").push({
//   description: "Bill",
//   note: "",
//   amount: 307642,
//   createdAt: 976263773721,
// });

// database.ref("expenses").push({
//   description: "Phone bill",
//   note: "",
//   amount: 5900,
//   createdAt: 976263773721,
// });

// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 1200,
//   createdAt: 976263773721,
// });

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Arif Shaikh",
//     age: 46,
//     isSingle: false,
//     location: {
//       city: "Leeds",
//       country: "UK",
//     },
//   });

// firebase.database().ref("age").set(47);
// firebase.database().ref("location/city").set("Bradford");

// firebase.database().ref("attributes").set({
//   height: 166,
//   weight: 90,
// });

// firebase.database().ref("attributes/height").set(165);
// firebase.database().ref("attributes/weight").set(85);
