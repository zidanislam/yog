
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
const firebaseInitilize=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInitilize;