import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const FypBlogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='role' />
        <EditButton basePath='/fyp-blog' />
        <DeleteButton basePath='/fyp-blog' />
      </Datagrid>
    </List>
  )
}

export default FypBlogList
