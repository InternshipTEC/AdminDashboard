import React from 'react'
import { Create, DateTimeInput, SimpleForm, TextInput } from 'react-admin'

const EventCreate = (props) => {
  return (
    <Create title='Create an Event' {...props}>
      <SimpleForm>
        <TextInput source='name'/>
        <TextInput source='description'/>
        <DateTimeInput source='absenStartsAt'/>
        <DateTimeInput source='absenEndedAt'/>
      </SimpleForm>
    </Create>
  )
}

export default EventCreate
