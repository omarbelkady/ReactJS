import React from 'react';
import { Edit, SimpleForm, TextInput} from 'react-admin';

const UserEdit = (props) => {
    return (
        <Edit title='Edit This User' {...props}>
            <SimpleForm>
                {/*Disabled: Prevent the id field from being modified*/}
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
            </SimpleForm>
            
        </Edit>
    )
}

export default UserEdit;
