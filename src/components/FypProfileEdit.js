import React from "react";
import { Edit, SimpleForm, RadioButtonGroupInput } from "react-admin";

const FypProfileEdit = (props) => {
  return (
    <Edit title="Edit Profile" {...props}>
      <SimpleForm>
        <RadioButtonGroupInput source="role" choices={[
          { id: 'hacker', name: 'hacker' },
          { id: 'hipster', name: 'hipster' },
          { id: 'hustler', name: 'hustler' },
        ]} />
      </SimpleForm>
    </Edit>
  );
};

export default FypProfileEdit;
