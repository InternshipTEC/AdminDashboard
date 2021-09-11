import React from 'react'
import { Edit, SimpleForm, TextInput, BooleanInput} from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='nim' />
        <TextInput source='fakultas' />
        <TextInput source='email' />
        <BooleanInput source='verified' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
