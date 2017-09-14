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
import stores from './stores';

class App extends Component {

    render() {
        return (
            <TestCpn/>
        );
    }

}

render(
    <Provider {...stores}>
        <App/>
    </Provider>,
    document.getElementById('app')
);