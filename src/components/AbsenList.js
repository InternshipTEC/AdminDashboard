import { CreateButton, ExportButton, TopToolbar } from "ra-ui-materialui";
import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
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

const AbsenList = (props) => {
  return (
    <List {...props} actions={<ListActions />}>
      <Datagrid>
        <TextField source="absenId" />
        <TextField source="userId" />
        <TextField source="eventId" />
        <EditButton basePath="/absen" />
        <DeleteButton basePath="/absen" />
      </Datagrid>
    </List>
  );
};

export default AbsenList;
