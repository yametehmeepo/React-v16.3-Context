import React, {Component} from 'react';
import './App.less';
import AddPanel from "./components/AddPanel"
import AppContext from './AppContext'
import ListPanel from "./components/ListPanel"
import Statistics from "./components/Statistics"
import storage from "./common/storage"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ListDataArr: storage.fetch(),
            hanldeAdd: (listItem) => this.onAddClick(listItem),
            handleToggle: (index) => this.onToggleTodo(index),
            handleDelete: (index) => this.deletehandler(index)
        }
    }

    onAddClick(listItem) {
        const newList = [...this.state.ListDataArr, {text: listItem, ischecked: false}]
        this.setState({
            ListDataArr: newList
        })
        storage.save(newList);
    }

    onToggleTodo(index) {
        const newList = this.state.ListDataArr.map((item, itemIndex) => {
            if (itemIndex === index) {
                return Object.assign({}, item, {
                    ischecked: !item.ischecked
                })
            }
            return item;
        })
        this.setState({
            ListDataArr: newList
        })
        storage.save(newList);
    }

    deletehandler(index) {
        const newList = this.state.ListDataArr.filter((item, itemIndex) => itemIndex !== index)
        this.setState({
            ListDataArr: newList
        })
        storage.save(newList);
    }

    render() {
        return (
            <div id="app">
                <AppContext.Provider value={this.state}>
                    <AddPanel/>
                    <ListPanel/>
                    <Statistics/>
                </AppContext.Provider>
            </div>
        );
    }
}

export default App;
