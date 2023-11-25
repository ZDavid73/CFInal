import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { letras } from "../types/letras";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { saveletras } from "../store/action";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const saveletrasInDB = async (letras: letras) => {
    try {
await addDoc(collection(db, "letrass"), letras);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

};

const getletrassFromDB = async (): Promise<letras[]> =>{
  const resp: letras[] =[];
  const querySnapshot = await getDocs(collection(db, "letrass"));
  querySnapshot.forEach((doc: any) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data(),
    }as letras)
  });
  return resp;
};



export default {saveletrasInDB, getletrassFromDB}