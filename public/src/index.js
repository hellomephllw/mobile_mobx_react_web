/**
 * Created by liliwen on 2017/4/8.
 */
'use strict';
if (process.env.NODE_ENV != 'production') {
    require('./common/lib/commonCss');
}
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import TestCpn from './components/test/TestCpn';
import Test2Cpn from './components/test/Test2Cpn';
import stores from './stores';

class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/first?name=123">first</Link></li>
                    <li><Link to="/second">second</Link></li>
                </ul>

                <Switch>
                    <Route path="/first" exact component={TestCpn}/>
                    <Route path="/second" component={Test2Cpn}/>
                </Switch>
            </div>
        );
    }

}

render(
    <Provider {...stores}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
);