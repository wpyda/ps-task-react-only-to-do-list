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
    state = {
        tasks: null,
        newTaskName: '',
        newTaskPriority: '',
        doneStatus: false,
    };

    tableData = [];

    getData() {
        const data = JSON.parse(localStorage.getItem('tasks'));

        if (data !== null) {
            data.forEach((element) => {
                this.tableData.push(element)
            });
        }
    }

    componentWillMount() { this.getData() };

    addTask = () => {
        if (!this.state.newTaskName) {
            alert('Empty text field!');
            return
        }

        this.tableData.push({
            name: this.state.newTaskName,
            priority: this.state.newTaskPriority,
            status: this.state.doneStatus,
        });

        localStorage.setItem('tasks', JSON.stringify(this.tableData));

        this.setState({
            newTaskName: '',
            newTaskPriority: '',
        })
    };

    handleTextFieldChange = (e, value) => this.setState({newTaskName: value});

    handlePriorityChange = (event, index, value) => this.setState({newTaskPriority: value});

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} rounded={false} style={style}>
                    <AddTask
                        tableData={this.tableData}
                        state={this.state}
                        addTask={this.addTask}
                        handlePriorityChange={this.handlePriorityChange}
                        handleTextFieldChange={this.handleTextFieldChange}
                    />
                    <TasksList tableData={this.tableData} />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
