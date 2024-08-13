import { useState, useCallback } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const useAddAppointment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addAppointment = useCallback(async (appointment) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = await addDoc(collection(db, "appointments"), appointment);
      setLoading(false);
      return docRef.id;
    } catch (e) {
      setError(e);
      setLoading(false);
      throw e;
    }
  }, []);

  return { addAppointment, loading, error };
};

export default useAddAppointment;
