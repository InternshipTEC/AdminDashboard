import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";

const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField showTime={true} source="startsAt" />
        <DateField showTime={true} source="endedAt" />
        <EditButton basePath="/tugas" />
        <DeleteButton basePath="/tugas" />
      </Datagrid>
    </List>
  );
};

export default EventList;
