import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
  DeleteButton,
  TopToolbar,
  CreateButton,
  ExportButton,
} from "react-admin";
import { ImportButton } from "react-admin-import-csv";

const ListActions = (props) => {
  const {
    className,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
  } = props;
  return (
    <TopToolbar className={className}>
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filter={filterValues}
        exporter={exporter}
      />
      <ImportButton {...props} />
    </TopToolbar>
  );
};



const UserList = (props) => {
  return (
    <List {...props} actions={<ListActions />}>
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
