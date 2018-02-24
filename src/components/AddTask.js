import React from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AddTask extends React.Component {
    state = {
        tasks: null,
        newTaskName: '',
        newTaskPriority: '',
        doneStatus: false,
    };

    addTask = () => {
        if (!this.state.newTaskName) {
            alert('Empty textfield!');
            return
        }

        this.props.tableData.push({
            name: this.state.newTaskName,
            priority: this.state.newTaskPriority,
            status: this.state.doneStatus,
        });

        localStorage.setItem('tasks', JSON.stringify(this.props.tableData));
        console.log(this.props.tableData);

        this.setState({
            newTaskName: '',
            newTaskPriority: '',
        })
    };

    handlePriorityChange = (event, index, value) => this.setState({newTaskPriority: value});

    render() {
        return (
            <div>
                <TextField
                    hintText='New Task'
                    fullWidth={true}
                    onChange={(e, value) => this.setState({newTaskName: value})}
                    value={this.state.newTaskName}
                />

                <SelectField
                    floatingLabelText="Priority"
                    value={this.state.newTaskPriority}
                    onChange={this.handlePriorityChange}
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
                    onClick={this.addTask}
                />
            </div>
        )
    }
}

export default AddTask