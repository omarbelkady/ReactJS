import React from "react";
import { List, Datagrid, TextField, EditButton, EmailField, DeleteButton} from 'react-admin';


const UserList = (props) => {
  return ( 
    <List {...props}>
    {/*passing in an object above and I am spreading all my props across
    
      Within the data grid I put in any data I want aka fields, buttons, etc.
    */}

        <Datagrid>
          <TextField source='id' />
          <TextField source='name' />
          <EmailField source='email' />
          <EditButton basePath='/posts' />
          {/* I put the path where I want to make the Request (GET, PUT, POST, DELETE) */}
          <DeleteButton basePath='/posts' />

        </Datagrid>
    </List>
  )
}

export default UserList;
