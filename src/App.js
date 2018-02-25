import React from 'react';

import Paper from 'material-ui/Paper';
import orderBy from 'lodash/orderBy';

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

const invertDirection = {
    asc: "desc",
    desc: "asc",
};

const styles = {
    container: {
        margin: 20,
        padding: 20,
    },

    headerText: {
        textAlign: "center",
    }
};

class App extends React.Component {
    state = {
        newTaskName: '',
        newTaskPriority: '',
        doneStatus: false,
        id: '',
        tableData: [],
        columnToSort: '',
        sortDirection: 'desc',
        rowsPerPage: 5,
        page: 0,
    };

    getData() {
        const data = JSON.parse(localStorage.getItem('tasks'));
        if (data !== null) {
            this.setState({tableData: data})
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

    handleTextFieldChange = (e) => this.setState({newTaskName: e.target.value});

    handlePriorityChange = (e) => this.setState({newTaskPriority: e.target.value});

    deleteTask = (taskId) => {
        let tempData = [];
        tempData = tempData.concat(this.state.tableData);

        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].id === taskId) {
                tempData.splice(i, 1);
            }
        }

        localStorage.setItem('tasks', JSON.stringify(tempData));

        this.setState({tableData: tempData});
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

        this.setState({tableData: tempData});
    };

    handleSort = (columnName) => {
        this.setState({
            columnToSort: columnName,
            sortDirection:
                this.state.columnToSort === columnName
                    ? invertDirection[this.state.sortDirection]
                    : 'asc',
        });
        console.log('columnName', columnName)
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        console.log('col', this.state.columnToSort, 'dir', this.state.sortDirection);
        return (
            <div style={styles.container}>
                <h1 style={styles.headerText}>ToDo App</h1>
                <AddTask
                    tableData={this.state.tableData}
                    state={this.state}
                    addTask={this.addTask}
                    handlePriorityChange={this.handlePriorityChange}
                    handleTextFieldChange={this.handleTextFieldChange}
                />
                <TasksList
                    tableData={orderBy(
                        this.state.tableData,
                        this.state.columnToSort,
                        this.state.sortDirection
                    )}
                    deleteTask={this.deleteTask}
                    toggleTaskDone={this.toggleTaskDone}
                    handleSort={this.handleSort}
                    columnToSort={this.state.columnToSort}
                    sortDirection={this.state.sortDirection}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    handleChangePage={this.handleChangePage}
                    handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </div>
        );
    }
}

export default App;
