import React from 'react';

import ActionDelete from 'material-ui-icons/Delete';

const styles = { cursor: "pointer" };

const DeleteTask = (props) => (
    <ActionDelete
        onClick={() => props.deleteTask(props.taskId)}
        style={styles}
    />
);

export default DeleteTask