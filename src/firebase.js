const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');

const firebaseConfig = {
	apiKey: 'AIzaSyDvCl7_JDg0OLFKr9_zVO50p-8zIbM__cg',
	authDomain: 'facey-a6550.firebaseapp.com',
	databaseURL: 'https://facey-a6550.firebaseio.com',
	projectId: 'facey-a6550',
	storageBucket: 'facey-a6550.appspot.com',
	messagingSenderId: '1081629726545',
	appId: '1:1081629726545:web:ab781d2cb58f533368e570',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };
