import Calendar from "./components/Calendar.jsx";
import useAppointments from "./hooks/useAppointments.js";
import useAddAppointment from "./hooks/useAddAppointment";
import useDeleteAppointment from "./hooks/useDeleteAppointment.js";
import useEditAppointment from "./hooks/useEditAppointment.js";

function App() {
  const { appointments, loading, error } = useAppointments();
  const { addAppointment, loadingAdd, errorAdd } = useAddAppointment();
  const { deleteAppointment } = useDeleteAppointment();
  const { editAppointment } = useEditAppointment();
  if (loading || loadingAdd) {
    return <p>Loading appointments...</p>;
  }

  if (error || errorAdd) {
    return <p>Error loading appointments: {error}</p>;
  }
  return (
    <Calendar
      appointments={appointments}
      addAppointment={addAppointment}
      deleteAppointment={deleteAppointment}
      editAppointment={editAppointment}
    />
  );
}

export default App;
