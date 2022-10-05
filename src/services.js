import {db} from "./firebase";
import { collection ,addDoc,getDocs, deleteDoc ,doc} from 'firebase/firestore';


const chatref  = collection(db,"chats");
class chatservice{

    addchat = (newchat) =>
    {
        return addDoc(chatref, newchat  );
    }
     
  getAllchat = (id) =>
  {
      return getDocs(chatref);
  }

  deletebook = (id) =>
  {
      const bookDoc = doc(db,"chats",id);
      
      return deleteDoc(bookDoc);
  }

}
export default new  chatservice;