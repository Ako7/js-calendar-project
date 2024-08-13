import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const apRef = collection(db, "appointments");

await setDoc(doc(apRef, "SF"), {
  title: "Website Re-Design Plan",
  startDate: "2024-08-12T09:45",
  endDate: "2024-08-12T11:00",
  id: 0,
  location: "Room 1",
});
