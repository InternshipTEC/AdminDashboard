import React from "react";
import { Edit, SimpleForm, TextInput, DateTimeInput } from "react-admin";

const AbsenEdit = (props) => {
  return (
    <Edit title="Edit Event" {...props}>
      <SimpleForm>
        <TextInput source="absenId" />
        <TextInput source="userId" />
        <TextInput source="eventId" />
      </SimpleForm>
    </Edit>
  );
};

export default AbsenEdit;
