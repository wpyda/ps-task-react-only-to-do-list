import React from 'react'

import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';
import SingleTask from "./SingleTask";
import DownArrow from "material-ui-icons/ArrowDropDown";
import UpArrow from "material-ui-icons/ArrowDropUp";

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
                    <TableHead

                    >
                        <TableRow>
                            {header.map((el, i) => (
                                <TableCell key={i}>
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
                                </TableCell>
                            ))}
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody

                    >
                        {
                            this.props.tableData
                            &&
                            this.props.tableData.map((element, index) => (
                                <SingleTask
                                    id={element.id}
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
                    <TableFooter>

                    </TableFooter>
                </Table>
            </div>
        )
    }
}

export default TasksList