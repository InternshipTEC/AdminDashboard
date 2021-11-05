import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const FypProfileList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='role' />
        <TextField source='user.name' label="Username" />
        <TextField source='user.id' label="Id TEC" />
        <EditButton basePath='/fyp-profile' />
        <DeleteButton basePath='/fyp-profile' />
      </Datagrid>
    </List>
  )
}

export default FypProfileList
