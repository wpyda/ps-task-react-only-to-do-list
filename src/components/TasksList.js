import React from 'react';

import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import SingleTask from "./SingleTask";
import ListPagination from "./ListPagination";

const header = [
    {name: "Task Name", id: "taskName"},
    {name: "Priority", id: "priority"},
    {name: "Done", id: "done"},
];
const styles = {

    paper: {
        marginTop: 20,
    },

    tableHead: {
        backgroundColor: '#5d5216',
    },

    tableCell: {
        color: "#FFFFFF",
        fontWeight: "700",
    },
};

class TasksList extends React.Component {
    render() {
        return (
            <Paper elevation={10} style={styles.paper}>
                <Table>
                    <TableHead style={styles.tableHead}>
                        <TableRow>
                            {header.map((el, i) => (
                                <TableCell
                                    // onClick={this.props.handleSort(el.id)}
                                    // id={el.id}
                                    key={i}
                                    style={styles.tableCell}
                                >
                                    {el.name}
                                </TableCell>
                            ))}
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.tableData
                            &&
                            this.props.tableData.slice(this.props.page * this.props.rowsPerPage,
                                this.props.page * this.props.rowsPerPage + this.props.rowsPerPage).map((element, index) => (
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
                        <ListPagination
                            tableData={this.props.tableData}
                            rowsPerPage={this.props.rowsPerPage}
                            page={this.props.page}
                            handleChangePage={this.props.handleChangePage}
                            handleChangeRowsPerPage={this.props.handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

export default TasksList