import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALTHkAY5EReJ9_3R5Kd7Cnk08kSJSVCOQ",
    authDomain: "crwn-db-255f1.firebaseapp.com",
    projectId: "crwn-db-255f1",
    storageBucket: "crwn-db-255f1.appspot.com",
    messagingSenderId: "80280243201",
    appId: "1:80280243201:web:0040241b820b7d5a9d0400",
    measurementId: "G-3SP97JV3YK"
};
firebase.initializeApp(config);

export const createUserProfileDocument= async (userAuth,additionData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapShot= await userRef.get();

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createAt= new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionData
            })

        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    
    const batch=firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef= collectionRef.doc();
        console.log(newDocRef)
        batch.set(newDocRef,obj);
    });
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections =>{
    const transformedCollection = collections.docs.map(doc=>{
        const { title, items}= doc.data();

        return{
            routeName:encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    })
    return transformedCollection.reduce((accumulator, collection)=>{
        accumulator[collection.title.toLowerCase()]= collection;
        return accumulator;
    },{});
}

export const getCurrentUser= () =>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider =new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;