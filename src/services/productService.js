import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

const productsCollection = collection(db, 'products');

export const getProducts = async () => {
  const productSnapshot = await getDocs(productsCollection);
  const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productList;
};
