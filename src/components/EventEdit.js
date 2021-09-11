import React from 'react';
import { Edit, SimpleForm, TextInput, DateTimeInput} from 'react-admin';

const EventEdit = (props) => {
  return (
    <Edit title='Edit Event' {...props}>
      <SimpleForm>
        <TextInput source='name'/>
        <TextInput source='description'/>
        <DateTimeInput source='absenStartsAt'/>
        <DateTimeInput source='absenEndedAt'/>
      </SimpleForm>
    </Edit>
  )
}

export default EventEdit
