import React from "react";
import { Edit, SimpleForm, TextInput, DateTimeInput } from "react-admin";

const EventEdit = (props) => {
  return (
    <Edit title="Edit Event" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="iframeForm" />
        <DateTimeInput source="startsAt" />
        <DateTimeInput source="endedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
