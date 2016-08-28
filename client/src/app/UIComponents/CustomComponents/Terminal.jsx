import React from 'react'
import {Link} from 'react-router'

export default class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.lastLogin = new Date().toString();
        this.osVersion = window.navigator.platform;
        console.log(props)
        this.state={
            position: {
                x: '25vw',
                y: '25vh'
            },
            offsets: {
                x: 0,
                y: 0
            },
            content: '',
            contentHistory: [],
            prompt_l1: new Date().toString(),
            prompt_l2: window.navigator.platform
        }
    }
    drag_start(event) {
        var style = window.getComputedStyle(event.target, null);
        this.setState({
            offsets: {
                x: parseInt(style.getPropertyValue("left"),10) - event.clientX,
                y: parseInt(style.getPropertyValue("top"),10) - event.clientY
            }
        })
    } 
    drag_end(e) {
        this.setState({
            position: {
                x: e.clientX + this.state.offsets.x,
                y: e.clientY + this.state.offsets.y
            }
        })
    }
    handleTerminalCommand(e) {
        if(e.key === "Enter") {
            let arrCopy = this.state.contentHistory
            if(arrCopy.length > 100) arrCopy.shift()
            arrCopy.push([this.state.prompt_l1, this.state.prompt_l2, this.state.content])
            this.setState({
                contentHistory: arrCopy,
                content: '',
                prompt_l1: new Date().toString()
            })
        }
    }
    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    render() {
        return <div className="terminal_container" 
                    onDragStart={this.drag_start.bind(this)} 
                    onDragEnd={this.drag_end.bind(this)} 
                    x={this.state.position.x} 
                    y={this.state.position.y}
                    draggable='true' 
                    style={{ top: this.state.position.y, left: this.state.position.x}}>
            <div className="terminal_top"></div>
            <div className="terminal_body">
                {this.state.contentHistory.map((v,i) => {
                    return <div key={i}><div>{v[0]}</div><div>{v[1]}</div><div>{v[2]}</div></div>
                })}
                <div><div className='terminal_line_1_prompt'>{this.state.prompt_l1}</div><div className='terminal_line_1_prompt'>visitor/{this.state.prompt_l2}@igor.im:~$
                <input type='text' 
                        onChange={this.handleChange.bind(this)} 
                        onKeyUp={this.handleTerminalCommand.bind(this)}
                        value={this.state.content}
                /></div></div>
            </div>
        </div>;
    }
}
