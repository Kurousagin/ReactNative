import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query , where} from 'firebase/firestore/lite';
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCkm6fzoiPcPXR_AAEMFBlnhnwsbbtQG5w",
  authDomain: "app-test-ee69d.firebaseapp.com",
  projectId: "app-test-ee69d",
  storageBucket: "app-test-ee69d.appspot.com",
  messagingSenderId: "365524075026",
  appId: "1:365524075026:web:ea51cb7c4e92b5c4638ecb"
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);
const db = getFirestore(database)
const q = collection(db, "task")





// async function getTask(db) {
//   const taskCol = collection(db, 'cities');
//   const taskSnapshot = await getDocs(citiesCol);
//   const taskList = citySnapshot.docs.map(doc => doc.data());
//   return tasList;
// }


export default q
