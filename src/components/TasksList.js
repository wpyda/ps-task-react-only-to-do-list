import React from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import SingleTask from "./SingleTask"

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
                            <TableHeaderColumn>Task Name</TableHeaderColumn>
                            <TableHeaderColumn>Priority</TableHeaderColumn>
                            <TableHeaderColumn>Done</TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={false}
                        showRowHover={true}
                    >
                        <SingleTask
                            tableData={this.props.tableData}
                            deleteTask={this.props.deleteTask}
                        />

                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default TasksList