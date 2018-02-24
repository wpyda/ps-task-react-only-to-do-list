import React from 'react'

import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteTask from "./DeleteTask";

const SingleTask = (props) => (

    props.tableData.map((element, index) => (
        <TableRow key={index}>
            <TableRowColumn>{element.name}</TableRowColumn>
            <TableRowColumn>{element.priority}</TableRowColumn>

            <TableRowColumn>
                <Checkbox/>
            </TableRowColumn>

            <TableRowColumn>
                <DeleteTask
                    deleteTask={props.deleteTask}
                    taskId={element.id}
                />
            </TableRowColumn>
        </TableRow>
    ))
);

export default SingleTask