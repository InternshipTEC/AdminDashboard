import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import MarkdownInput from 'ra-input-markdown';

const FypBlogEdit = (props) => {
  return (
    <Edit title="Edit Blog" {...props}>
      <SimpleForm>
        <TextInput source="role" />
        <MarkdownInput source="content" />
      </SimpleForm>
    </Edit>
  );
};

export default FypBlogEdit;
