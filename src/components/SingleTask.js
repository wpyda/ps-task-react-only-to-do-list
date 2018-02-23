import React from 'react'

import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete'

const SingleTask = (props) => (

    <ListItem
        primaryText={'dasda'}
        rightIcon={<ActionDelete onClick={() => (null)}/>}
    />
)

export default SingleTask