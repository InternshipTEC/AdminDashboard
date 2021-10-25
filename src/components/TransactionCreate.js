import React from 'react'
import { Create, SimpleForm, SimpleFormIterator, TextInput, ArrayInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a Transaction' {...props}>
      <SimpleForm>
        <TextInput source='photoUrl' />
        <TextInput source='noRekening' />
        <TextInput source='pemilikRekening' />
        <TextInput source='media' />
        <TextInput source='metode' />
        <TextInput source='nominal' />
        <TextInput source='uniqueIdentifier' />
        <ArrayInput source='usersEmail'>
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
