/**
 * Created by liliwen on 2017/4/8.
 */
'use strict';
if (process.env.NODE_ENV != 'production') {
    require('./common/lib/commonCss');
}
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import store from './store';
import IndexLayout from './components/layouts/index';
// import HomeContainer from './components/home';

render(
    <div>hello</div>,
    document.getElementById('app')
);