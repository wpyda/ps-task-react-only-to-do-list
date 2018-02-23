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
import SingleTask from "./SingleTask"

class TasksList extends React.Component {
    state = {
        tasks: null,
        newTaskName: '',
        newTaskPriority: '',
    };

    tableData = [
        {
            name: 'John Smith',
            priority: 'High',
        },
        {
            name: 'Randal White',
            priority: 'Medium',
        },
        {
            name: 'Stephanie Sanders',
            priority: 'Low',
        },
    ];

    render() {
        return (
            <div>
                <TextField
                    hintText='New Task'
                    fullWidth={true}
                    onChange={(e, value)=> this.setState({newTaskName: value})}
                    value={this.state.newTaskName}
                />
                <RaisedButton
                    label='Dodaj'
                    secondary={true}
                    fullWidth={true}
                    // onClick={}
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
                        {this.tableData.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.priority}</TableRowColumn>
                                <TableRowColumn>
                                    <Checkbox/>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>)
    }
}

export default TasksList