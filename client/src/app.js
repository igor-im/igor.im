require('./styles/app.scss')

import ReactDOM from 'react-dom'
import React from 'react'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import * as Pages from './app/PageContainers/PageContainersAll'
import {RightNav} from './app/UIComponents/SiteWide/Navigation/Nav.jsx'
import { App } from './App.jsx'

console.log(Pages)

let store = createStore(function todoApp(state = {}, action) {
    // For now, don’t handle any actions
    // and just return the state given to us.
    return state
})

// class App extends React.Component {
//     render() {
//         return <div>
//             <RightNav />
//             {this.props.children || <Pages.Home />}
//         </div>
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="blog" component={Pages.Blog}/>
                <Route path="projects" component={Pages.Projects}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount-point')
);