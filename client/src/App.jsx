import React from 'react'
import * as Pages from './app/PageContainers/PageContainersAll'
import {RightNav} from './app/UIComponents/SiteWide/Navigation/Nav.jsx'
import HTML5Backend from "react-dnd-html5-backend";
import Terminal from './app/UIComponents/CustomComponents/Terminal.jsx'
//import {DragDropContext} from 'react-dnd'

console.log(Pages)

export class App extends React.Component {
	constructor(props) {
		super(props)
		
	}
	
    render() {
        const { hideSourceOnDrag, connectDropTarget } = this.props;
        return <div>
            <RightNav />
            {this.props.children || <Pages.Home />}
            {/* <Terminal /> */}
        </div>
    }
}