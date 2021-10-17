import React from "react";
import { Create, DateTimeInput, SimpleForm, TextInput } from "react-admin";

const EventCreate = (props) => {
  return (
    <Create title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="iframeForm" />
        <DateTimeInput source="startsAt" />
        <DateTimeInput source="endedAt" />
      </SimpleForm>
    </Create>
  );
};

export default EventCreate;
