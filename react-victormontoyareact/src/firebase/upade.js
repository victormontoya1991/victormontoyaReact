import { db } from "./config.js";
import MOCK from '../data/data_produc.json' assert{type:"json"}
import { collection, addDoc} from "firebase/firestore";


MOCK.forEach(item => delete item.id)

const productsRef = collection(db, "data_produc")

MOCK.forEach(item =>{
    addDoc(productsRef, item)
})


//debe agregar al final del documento package
// "type":"module"