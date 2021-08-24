import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <BooleanField source="verified"/>
        <TextField source='pemilikRekening' />
        <EditButton basePath='/transaction' />
        <DeleteButton basePath='/transaction' />
      </Datagrid>
    </List>
  )
}

export default UserList
