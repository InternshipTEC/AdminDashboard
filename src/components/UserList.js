import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <BooleanField source="verified" />
        <TextField source="id" label="No. TEC" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="absenPercentage" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
