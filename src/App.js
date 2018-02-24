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
        id: Date.now(),
        tableData: [],
    };

    getData() {
        const data = JSON.parse(localStorage.getItem('tasks'));

        if (data !== null) {
            data.forEach((element) => {
                this.state.tableData.push(element)
            });
        }
    }

    componentWillMount() { this.getData() };

    addTask = () => {
        if (!this.state.newTaskName) {
            alert('Empty text field');
            return
        }

        if (!this.state.newTaskPriority) {
            alert('Please add a priority to your task');
            return
        }

        this.state.tableData.push({
            name: this.state.newTaskName,
            priority: this.state.newTaskPriority,
            status: this.state.doneStatus,
            id: this.state.id,
        });

        localStorage.setItem('tasks', JSON.stringify(this.state.tableData));

        this.setState({
            newTaskName: '',
            newTaskPriority: '',
        });
    };

    handleTextFieldChange = (e, value) => this.setState({newTaskName: value});

    handlePriorityChange = (event, index, value) => this.setState({newTaskPriority: value});

    deleteTask = (taskId) => {
        const data = JSON.parse(localStorage.getItem('tasks'));

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === taskId) {
                data.splice(i, 1);
            }
        }
        localStorage.setItem('tasks', JSON.stringify(data));

        //TODO this.getData() is not working, list doesn't refresh
        this.getData();
    };

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1} rounded={false} style={style}>
                    <AddTask
                        tableData={this.state.tableData}
                        state={this.state}
                        addTask={this.addTask}
                        handlePriorityChange={this.handlePriorityChange}
                        handleTextFieldChange={this.handleTextFieldChange}
                    />
                    <TasksList
                        tableData={this.state.tableData}
                        deleteTask={this.deleteTask}
                    />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
