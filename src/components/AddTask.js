import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = {
    backgroundColor: '#5d5216',
    fontWeight: "700",
};

const AddTask = (props) => (

    <Paper elevation={10}>
        <TextField
            id="newTask"
            label="New Task"
            value={props.state.newTaskName}
            onChange={props.handleTextFieldChange}
            margin="normal"
            fullWidth={true}
        />

        <FormControl fullWidth={true}>
            <InputLabel>Priority</InputLabel>
            <Select
                value={props.state.newTaskPriority}
                onChange={props.handlePriorityChange}
            >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
            </Select>
        </FormControl>

        <Button
            variant="raised"
            color="primary"
            fullWidth={true}
            onClick={props.addTask}
            style={styles}
        >
            Add
        </Button>
    </Paper>

);

export default AddTask