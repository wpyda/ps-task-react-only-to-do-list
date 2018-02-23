import React from 'react'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SingleTask from "./SingleTask"

class TasksList extends React.Component {
    state = {
        tasks: null,
        newTaskName: '',
        newTaskPriority: '',
        doneStatus: false,
    };

    tableData = [];

    componentWillMount() {
        const data = JSON.parse(localStorage.getItem('tasks'));

        if (data !== null) {
            data.forEach((element) => {
                this.tableData.push(element)
            });
        }
    };

    addTask = () => {
        if (!this.state.newTaskName) {
            alert('Empty textfield!');
            return
        }

        this.tableData.push({
            name: this.state.newTaskName,
            priority: this.state.newTaskPriority,
            status: this.state.doneStatus,
        });
        console.log(this.tableData);

        localStorage.setItem('tasks', JSON.stringify(this.tableData));

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
                    // style={{display: 'inline-block'}}
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

                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Task Name</TableHeaderColumn>
                            <TableHeaderColumn>Priority</TableHeaderColumn>
                            <TableHeaderColumn>Done</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={false}
                        showRowHover={true}
                    >
                        {this.tableData.map((element, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{element.name}</TableRowColumn>
                                <TableRowColumn>{element.priority}</TableRowColumn>
                                <TableRowColumn>
                                    <Checkbox/>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default TasksList