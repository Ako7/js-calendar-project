import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const useEditAppointment = () => {
  const editAppointment = async (appointmentId, updatedData) => {
    try {
      const q = query(
        collection(db, "appointments"),
        where("id", "==", appointmentId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (docSnap) => {
          const docRef = doc(db, "appointments", docSnap.id);
          await updateDoc(docRef, updatedData);
          console.log(
            `Appointment with ID ${appointmentId} has been updated with new data.`
          );
        });
      } else {
        console.log(`No appointment found with ID ${appointmentId}.`);
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
      throw error;
    }
  };

  return { editAppointment };
};

export default useEditAppointment;
