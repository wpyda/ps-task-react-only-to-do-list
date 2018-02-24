import React from 'react'

import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete'

const SingleTask = (props) => (

    props.tableData.map((element, index) => (
        <TableRow key={index}>
            <TableRowColumn>{element.name}</TableRowColumn>
            <TableRowColumn>{element.priority}</TableRowColumn>
            <TableRowColumn>
                <Checkbox/>
            </TableRowColumn>
        </TableRow>
    ))
);

export default SingleTask