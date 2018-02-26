import React from 'react'

import { TableCell,TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteTask from "./DeleteTask";

const styles = {
    name: { width: '60%' },
    priority: { width: '10%'},
    checkbox: { width: '10%' },
    delete: { width: '10%' },
};

const SingleTask = (props) => (
    <TableRow key={props.id} hover>
        <TableCell style={styles.name}>{props.name}</TableCell>
        <TableCell style={styles.priority}>{props.priority}</TableCell>

        <TableCell style={styles.checkbox}>
            <Checkbox
                onClick={() => props.toggleTaskDone(props.id)}
                checked={props.status}
                style={{color: '#ffae35'}}
            />
        </TableCell>

        <TableCell style={styles.delete}>
            <DeleteTask
                deleteTask={() => props.deleteTask(props.id)}
                taskId={props.id}
            />
        </TableCell>
    </TableRow>
);

export default SingleTask