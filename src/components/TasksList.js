import React from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import SingleTask from "./SingleTask";

const header = [
    {name: "Task Name"},
    {name: "Priority"},
    {name: "Done"},
];

class TasksList extends React.Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            {header.map((el, i) => (
                                <TableHeaderColumn key={i}>{el.name}</TableHeaderColumn>
                            ))}
                            <TableHeaderColumn/>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={false}
                        showRowHover={true}
                    >
                        {
                            this.props.tableData
                            &&
                            this.props.tableData.map((element, index) => (
                                <SingleTask
                                    key={element.id}
                                    name={element.name}
                                    priority={element.priority}
                                    status={element.status}
                                    deleteTask={() => this.props.deleteTask(element.id)}
                                    toggleTaskDone={() => this.props.toggleTaskDone(element.id)}
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default TasksList