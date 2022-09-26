import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

type createUserType = {
  email: string;
  password: string;
  auth: any;
};

export const createUser = createAsyncThunk(
  "data/createUser",
  async ({ email, password, auth }: createUserType) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const res = await addDoc(collection(db, "users"), {
        email,
        password,
        profiles: [email],
      });
      return res.id;
    } catch (err) {
      return false;
    }
  }
);

export const getUser = createAsyncThunk(
  "data/getUser",
  async (user: string) => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
);

export const getMovies = createAsyncThunk("data/getMovies", async () => {
  const res = await getDocs(collection(db, "movies"));
  const result = res.docs.map((item) => item.data());
  return result;
});

export const addProfileName = createAsyncThunk(
  "data/changeProfile",
  async (data: any) => {
    const q = query(collection(db, "users"), where("email", "==", data.user));
    const res = await getDocs(q);
    const result = res.docs[0].id;
    const docRef = doc(db, "users", result);
    await updateDoc(docRef, { profiles: [...data.profiles] });
    return data.profiles;
  }
);
