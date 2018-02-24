import React from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const AddTask = (props) => (

    <div>
        <TextField
            hintText='New Task'
            fullWidth={true}
            onChange={props.handleTextFieldChange}
            value={props.state.newTaskName}
        />

        <SelectField
            floatingLabelText="Priority"
            value={props.state.newTaskPriority}
            onChange={props.handlePriorityChange}
            fullWidth={true}
        >
            <MenuItem value={"Low"} primaryText="Low"/>
            <MenuItem value={"Medium"} primaryText="Medium"/>
            <MenuItem value={"High"} primaryText="High"/>
        </SelectField>

        <RaisedButton
            label='Add'
            primary={true}
            fullWidth={true}
            onClick={props.addTask}
        />
    </div>

)

export default AddTask