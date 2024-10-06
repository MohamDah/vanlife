import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyASKIWsUz1y_QFkm9ggBrQ0aWSeNXOjcoo",
    authDomain: "vanlife-a098f.firebaseapp.com",
    projectId: "vanlife-a098f",
    storageBucket: "vanlife-a098f.appspot.com",
    messagingSenderId: "966818616982",
    appId: "1:966818616982:web:3543aab67160a46c4b54b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// refactoring fetching functions
const vansCollectionRef = collection(db, "vans")



export async function getVans() {

    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc=> ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {...vanSnapshot.data()}

}

export async function getHostVans() {

    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc=> ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}



export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}