import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const MateriCreate = (props) => {
  return (
    <Create title="Create an Create" {...props}>
      <SimpleForm>
        <TextInput source="judul" />
        <TextInput source="deskripsi" />
        <TextInput source="link" />
      </SimpleForm>
    </Create>
  );
};

export default MateriCreate;
