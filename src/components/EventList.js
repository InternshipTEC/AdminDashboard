import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField
} from 'react-admin'


const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <DateField showTime={true} source='absenStartsAt' />
        <DateField showTime={true} source='absenEndedAt' />
        <EditButton basePath='/event' />
        <DeleteButton basePath='/event' />
      </Datagrid>
    </List>
  )
}

export default EventList 
