var firebaseConfig = {
  apiKey: "AIzaSyCmDconu0BleYwCcXEhIiic9woh95-9xAY",
  authDomain: "report-76aff.firebaseapp.com",
  databaseURL: "https://report-76aff.firebaseio.com",
  projectId: "report-76aff",
  storageBucket: "report-76aff.appspot.com",
  messagingSenderId: "237315453614",
  appId: "1:237315453614:web:75ac9710764e8f2ec4f33f",
  measurementId: "G-GH429306E2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();