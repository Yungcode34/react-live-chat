import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBrudj5_7cvIplUk1zWcZWfd8UqzxCnmCw",
    authDomain: "react-live-chat-1de61.firebaseapp.com",
    databaseURL: "https://react-live-chat-1de61.firebaseio.com",
    projectId: "react-live-chat-1de61",
    storageBucket: "react-live-chat-1de61.appspot.com",
    messagingSenderId: "721969113118"
  };
 const firebaseApp = firebase.initializeApp(config);
export const auth = firebaseApp.auth();
export const messageRef = firebaseApp.database().ref('messages');
export const roomRef = firebaseApp.database().ref('rooms');
export default firebaseApp;