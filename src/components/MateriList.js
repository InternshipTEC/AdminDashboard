import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const MateriList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="judul" />
        <EditButton basePath="/materi" />
        <DeleteButton basePath="/materi" />
      </Datagrid>
    </List>
  );
};

export default MateriList;
