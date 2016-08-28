import React from 'react'
import { Link } from 'react-router'

class NavToggle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id="nav-toggle" onClick={this.props.onClick}>
            {this.props.open ?
                <div id='burger' className='eating'>
                    <div className="hamburger line-1"></div>
                    <div className="hamburger line-2"></div>
                    <div className="hamburger line-3"></div>
                </div> :
                <div id='burger' className='hungry'>
                    <div className="hamburger line-1"></div>
                    <div className="hamburger line-2"></div>
                    <div className="hamburger line-3"></div>
                </div>
            }
        </div>;
    }
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <ul id='nav-menu' onClick={this.props.onClick}>
            <Link to={'/'}>Home</Link>
            <Link to={'blog'}>Blog</Link>
            <Link to={'projects'}>Projects</Link>
        </ul>;
    }
}

export class RightNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick(e) {
        this.setState({open: !this.state.open})
    }
    render() {
        return <div>
            <NavToggle onClick={this.handleClick.bind(this)} open={this.state.open} />
            { this.state.open ? <div  id="right-nav"><Nav onClick={this.handleClick.bind(this)} /></div> : '' }
        </div>;
    }
}