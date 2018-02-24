import React from 'react';

import ActionDelete from 'material-ui/svg-icons/action/delete';

const styles = {
    cursor: "pointer",
};

const DeleteTask = (props) => (
    <ActionDelete
        onClick={() => props.deleteTask(props.taskId)}
        style={styles}
    />
);

export default DeleteTask