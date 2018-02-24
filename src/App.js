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
        id: '',
        tableData: [],
    };

    getData() {
        const data = JSON.parse(localStorage.getItem('tasks'));
        if (data !== null) {
            this.setState({tableData: data})
        }
    }

    componentWillMount() {
        this.getData()
    };

    addTask = () => {
        if (!this.state.newTaskName) {
            alert('Empty text field');
            return
        }

        if (!this.state.newTaskPriority) {
            alert('Please add a priority to your task');
            return
        }

        let tempData = [];
        tempData = tempData.concat(this.state.tableData);

        tempData.push({
            name: this.state.newTaskName,
            priority: this.state.newTaskPriority,
            status: this.state.doneStatus,
            id: Date.now(),
        });

        localStorage.setItem('tasks', JSON.stringify(tempData));

        this.setState({
            newTaskName: '',
            newTaskPriority: '',
            id: '',
            tableData: tempData,
        });
    };

    handleTextFieldChange = (e, value) => this.setState({newTaskName: value});

    handlePriorityChange = (event, index, value) => this.setState({newTaskPriority: value});

    deleteTask = (taskId) => {
        let tempData = [];
        tempData = tempData.concat(this.state.tableData);

        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].id === taskId) {
                tempData.splice(i, 1);
            }
        }

        localStorage.setItem('tasks', JSON.stringify(tempData));

        this.setState({ tableData: tempData });
    };

    toggleTaskDone = (taskId) => {
        let tempData = [];
        tempData = tempData.concat(this.state.tableData);

        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].id === taskId) {
                tempData[i].status = !tempData[i].status;
            }
        }

        localStorage.setItem('tasks', JSON.stringify(tempData));

        this.setState({ tableData: tempData });
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
                        toggleTaskDone={this.toggleTaskDone}
                    />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
