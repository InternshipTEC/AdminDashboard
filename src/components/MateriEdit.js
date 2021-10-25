import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import MarkdownInput from 'ra-input-markdown';

const MateriEdit = (props) => {
  return (
    <Edit title="Edit Materi" {...props}>
      <SimpleForm>
        <TextInput source="role" />
        <MarkdownInput source="content" />
      </SimpleForm>
    </Edit>
  );
};

export default MateriEdit;
