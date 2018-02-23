import React, {Component} from 'react';

import TasksList from "./components/TasksList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const style = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} rounded={false} style={style}>
                    <TasksList/>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
