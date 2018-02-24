import React from 'react'

import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteTask from "./DeleteTask";

const SingleTask = (props) => (
    <TableRow key={props.key}>
        <TableRowColumn>{props.name}</TableRowColumn>
        <TableRowColumn>{props.priority}</TableRowColumn>

        <TableRowColumn>
            <Checkbox
                onClick={() => props.toggleTaskDone(props.key)}
                checked={props.status}
            />
        </TableRowColumn>

        <TableRowColumn>
            <DeleteTask
                deleteTask={() => props.deleteTask(props.key)}
                taskId={props.key}
            />
        </TableRowColumn>
    </TableRow>
);

export default SingleTask