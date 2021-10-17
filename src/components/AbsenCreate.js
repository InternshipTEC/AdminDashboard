import React from "react";
import { Create, DateTimeInput, SimpleForm, TextInput } from "react-admin";

const AbsenCreate = (props) => {
  return (
    <Create title="Create an Event" {...props}>
      <SimpleForm>
        <TextInput source="userId" />
        <TextInput source="eventId" />
      </SimpleForm>
    </Create>
  );
};

export default AbsenCreate;
