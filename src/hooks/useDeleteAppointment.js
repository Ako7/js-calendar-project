import {
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const useDeleteAppointment = () => {
  const deleteAppointment = async (appointmentId) => {
    try {
      const q = query(
        collection(db, "appointments"),
        where("id", "==", appointmentId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
          console.log(`Appointment with ID ${doc.id} has been deleted.`);
        });
      } else {
        console.log(`No appointment found with ID ${appointmentId}.`);
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      throw error;
    }
  };

  return { deleteAppointment };
};

export default useDeleteAppointment;
