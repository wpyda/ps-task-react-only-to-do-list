import React, {Component} from 'react';

import TasksList from "./components/TasksList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AddTask from "./components/AddTask";

const style = {
    margin: 20,
    padding: 20,
};

class App extends Component {
    tableData = [];

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} rounded={false} style={style}>
                    <AddTask tableData={this.tableData} />
                    <TasksList tableData={this.tableData} />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
