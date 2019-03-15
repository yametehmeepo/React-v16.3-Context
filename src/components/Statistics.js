import React, {Component} from 'react'
import AppContext from "../AppContext"

class Statistics extends Component {
    render() {
        /*return (
            <AppContext.Consumer>
                {
                    ({ListDataArr}) => {
                        const total = ListDataArr.length;
                        let finished = 0;
                        ListDataArr.forEach(function (item) {
                            if (item.ischecked) {
                                finished++;
                            }
                        })
                        return (
                            <div className="statisticsPanel">
                                共: <span className="color01">{total}</span> 个事项, 其中 完成事项: <span
                                className="color02">{finished}</span> 个, 代办事项: <span
                                className="color03">{total - finished}</span> 个.
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        );*/
        const {ListDataArr} = this.context
        const total = ListDataArr.length;
        let finished = 0;
        ListDataArr.forEach(function (item) {
            if (item.ischecked) {
                finished++;
            }
        })
        return (
            <div className="statisticsPanel">
                共: <span className="color01">{total}</span> 个事项, 其中 完成事项: <span
                className="color02">{finished}</span> 个, 代办事项: <span
                className="color03">{total - finished}</span> 个.
            </div>
        )
    }
}

Statistics.contextType = AppContext
export default Statistics