import React, {Component} from 'react'
import AppContext from "../AppContext"

class ListPanel extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {
                    ({ListDataArr, handleToggle, handleDelete}) => (
                        <div className="listpanel">
                            <h3>您的待办事项</h3>
                            <ul>
                                {
                                    ListDataArr.map((item, index) => {
                                        return (
                                            <li key={index + 1}>
                                                <span>
                                                    <input type="checkbox" onChange={() => handleToggle(index)} checked={!!item.ischecked}/>
                                                    {index + 1 + ": "}
                                                </span>
                                                <div className={item.ischecked ? 'text finised' : 'text'}>
                                                    {item.text}
                                                </div>
                                                <i onClick={() => handleDelete(index)}></i>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </AppContext.Consumer>
        );
    }
}

export default ListPanel