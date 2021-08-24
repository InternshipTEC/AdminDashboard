import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Edit, SimpleForm, TextInput, ImageField, BooleanInput } from 'react-admin'

const useImageFieldStyles = makeStyles(theme => ({
  image: { // This will override the style of the <img> inside the <div>
    aspectRatio:"initial",
    maxHeight:"none"
  }
}));

const UserEdit = (props) => {
  const imageFieldClasses = useImageFieldStyles();
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <ImageField classes={imageFieldClasses} source='photoUrl' />
        <TextInput source='metode' disabled/>
        <TextInput source='media' disabled/>
        <TextInput source='noRekening' disabled/>
        <TextInput source='pemilikRekening' disabled/>
        <BooleanInput source='verified'/>
        <BooleanInput source='fromAdmin' style={{display:'none'}}/>
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
