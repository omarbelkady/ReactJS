import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title='Edit The Post' {...props}>
            <SimpleForm>
                {/*Disabled: Prevent the id field from being modified*/}
                <TextInput disabled source='id'/>
                <TextInput source='title'/>
                <TextInput multiline source='body'/>
                <DateInput label='Published' source='publishedAt'/>
            </SimpleForm>
            
        </Edit>
    )
}

export default PostEdit;
