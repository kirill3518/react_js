import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAq2-CYrp0VKxYSnV7FKicYWrAIY8oK13k",
    authDomain: "react-js-53d25.firebaseapp.com",
    databaseURL: "https://react-js-53d25-default-rtdb.firebaseio.com",
    projectId: "react-js-53d25",
    storageBucket: "react-js-53d25.appspot.com",
    messagingSenderId: "473070670583",
    appId: "1:473070670583:web:8e96f50aa528946eecf9f2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);