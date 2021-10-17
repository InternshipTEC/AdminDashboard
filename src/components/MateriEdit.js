import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const MateriEdit = (props) => {
  return (
    <Edit title="Edit Materi" {...props}>
      <SimpleForm>
        <TextInput source="judul" />
        <TextInput source="deskripsi" />
        <TextInput source="link" />
      </SimpleForm>
    </Edit>
  );
};

export default MateriEdit;
