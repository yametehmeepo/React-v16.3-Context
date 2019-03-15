import React, {Component} from 'react'
import AppContext from '../AppContext'
import trim from "../util/trim"

class AddPanel extends Component {
    addhandler(hanldeAdd, e) {
        const inputStr = this.input.value;
        const trimStr = trim(inputStr);
        if ((e.target.type === 'text' && e.keyCode === 13) || e.target.type === 'button') {
            if (!trimStr) {
                return
            }
            hanldeAdd(trimStr);
            this.input.value = '';
        }
    }

    render() {
        return (
            <AppContext.Consumer>
                {
                    ({hanldeAdd}) => (
                        <div className="addpanel clearfix">
                            <button type="button" onClick={(e) => this.addhandler(hanldeAdd, e)}>新增</button>
                            <div className="addinput">
                                <input type="text" placeholder="请输入添加事项" onKeyDown={(e) => this.addhandler(hanldeAdd, e)} ref={input => this.input = input}/>
                            </div>
                        </div>
                    )
                }
            </AppContext.Consumer>
        )
    }
}

export default AddPanel