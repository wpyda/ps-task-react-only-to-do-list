import React from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import SingleTask from "./SingleTask";
import DownArrow from "material-ui/svg-icons/navigation/arrow-drop-down";
import UpArrow from "material-ui/svg-icons/navigation/arrow-drop-up";

const header = [
    {name: "Task Name", prop: "taskName"},
    {name: "Priority", prop: "priority"},
    {name: "Done", prop: "done"},
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
                                <TableHeaderColumn key={i}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                        onClick={() => this.props.handleSort(el.prop)}
                                    >

                                        {el.name}
                                        {
                                            this.props.columnToSort === el.prop
                                                ? (this.props.sortDirection === 'asc'
                                                    ? <UpArrow/>
                                                    : <DownArrow/>
                                                )
                                                : null
                                        }
                                    </div>
                                </TableHeaderColumn>
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