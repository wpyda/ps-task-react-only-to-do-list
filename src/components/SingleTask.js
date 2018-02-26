import React from 'react'

import { TableCell,TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteTask from "./DeleteTask";

const SingleTask = (props) => (
    <TableRow key={props.id} hover>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.priority}</TableCell>

        <TableCell>
            <Checkbox
                onClick={() => props.toggleTaskDone(props.id)}
                checked={props.status}
                style={{color: '#ffae35'}}
            />
        </TableCell>

        <TableCell>
            <DeleteTask
                deleteTask={() => props.deleteTask(props.id)}
                taskId={props.id}
            />
        </TableCell>
    </TableRow>
);

export default SingleTask