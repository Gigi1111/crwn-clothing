import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAsMgr6m04lSJo6pePtGkioE9izQ6Y3nvU',
	authDomain: 'crwn-db-83dc9.firebaseapp.com',
	databaseURL: 'https://crwn-db-83dc9.firebaseio.com',
	projectId: 'crwn-db-83dc9',
	storageBucket: '',
	messagingSenderId: '847658336744',
	appId: '1:847658336744:web:79469fcc98195b4a'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`user/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
