import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import MarkdownInput from 'ra-input-markdown';

const FypBlogCreate = (props) => {
  return (
    <Create title="Create a Blog" {...props}>
      <SimpleForm>
        <TextInput source="role" />
        <MarkdownInput source="content" />
      </SimpleForm>
    </Create>
  );
};

export default FypBlogCreate;
