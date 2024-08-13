/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DateNavigator,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

import React from "react";

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.appointments,
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      const { addAppointment } = this.props;
      const { deleteAppointment } = this.props;
      const { editAppointment } = this.props;

      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        console.log(added);
        try {
          const newAppointment = {
            id: startingAddedId,
            title: added.title || "New Appointment",
            startDate: added.startDate.toISOString().slice(0, 24),
            endDate: added.endDate.toISOString().slice(0, 24),
            location: added.location || "Room 1",
          };
          const docId = addAppointment(newAppointment);
          console.log("Appoinment saved with ID: ", docId);
        } catch (e) {
          console.error("Error adding appointment: ", e);
        }
      }
      if (changed) {
        data = data.map((appointment) => {
          if (changed[appointment.id]) {
            let updatedAppointment = {
              ...appointment,
              ...changed[appointment.id],
              startDate: changed[appointment.id].startDate
                ? new Date(changed[appointment.id].startDate)
                    .toISOString()
                    .slice(0, 24)
                : appointment.startDate,
              endDate: changed[appointment.id].endDate
                ? new Date(changed[appointment.id].endDate)
                    .toISOString()
                    .slice(0, 24)
                : appointment.endDate,
            };

            console.log(
              appointment.id,
              changed[appointment.id],
              updatedAppointment
            );
            // Wysyłanie zaktualizowanych danych do Firestore
            try {
              editAppointment(appointment.id, updatedAppointment);
            } catch (e) {
              console.error("Error editing appointment:", e);
            }
            return updatedAppointment;
          }
          return appointment;
        });
      }
      if (deleted !== undefined) {
        console.log(data, deleted);
        data = data.filter((appointment) => appointment.id !== deleted);
        deleteAppointment(deleted);
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={660} locale={"pl-PL"}>
          <ViewState defaultCurrentViewName="Week" />
          <EditingState onCommitChanges={this.commitChanges} />
          <IntegratedEditing />
          <DayView startDayHour={8} endDayHour={18} />
          <WeekView startDayHour={8} endDayHour={18} />
          <MonthView />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}
