import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
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
