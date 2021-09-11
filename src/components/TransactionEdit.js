import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Edit, SimpleForm, TextInput, ImageField, BooleanInput, ArrayField, SingleFieldList, TextField, Datagrid, ChipField, SimpleFormIterator, ArrayInput } from 'react-admin'
import { cloneElement } from 'react'
import { Chip, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';
import { BACKEND_URL } from '../App';

const useImageFieldStyles = makeStyles(theme => ({
  image: { // This will override the style of the <img> inside the <div>
    aspectRatio:"initial",
    maxHeight:"none"
  }
}));

const TextArrayField = ({ record, source }) =>{ 
  React.useEffect(()=>{
    console.log(record)
  },[]) 
  return (
  <>
      {record[source].map(item => <ChipField label={item} key={item} />)}
  </>
)}
TextArrayField.defaultProps = { addLabel: true };

const TagsField = ({ record }) => (
  <ul>
      {record.user.map(item => (
          <li key={item}>{item}</li>
      ))}
  </ul>
)
TagsField.defaultProps = {
  addLabel: true
};

const UserEdit = (props) => {
  const imageFieldClasses = useImageFieldStyles();
  const [users, setUsers] = useState([]) 
  React.useEffect(()=>{
    const token = localStorage.getItem('auth')
    axios.get(BACKEND_URL + props.location.pathname,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=>res.data)
    .then(data=>setUsers(data.data.user))
  },[])
  React.useEffect(()=>{
    console.log(users)
  },[,users])
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <ImageField classes={imageFieldClasses} source='photoUrl' />
        <List component="nav" aria-label="secondary mailbox folders">
          <Typography>Users : </Typography>
        {
          users.map(user=>(
            <>
                <ListItem>
                  <ListItemText primary={user} />
                </ListItem>
            </>
          ))
        }     
        </List>
        <TextInput source='uniqueIdentifier' disabled/>
        <TextInput source='nominal' disabled/>
        <TextInput source='media' disabled/>
        <TextInput source='noRekening' disabled/>
        <TextInput source='pemilikRekening' disabled/>
        <BooleanInput source='verified'/>
      </SimpleForm>
        
    </Edit>
  )
}

export default UserEdit
