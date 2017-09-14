import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TestStore')
@observer
export default class TestCpn extends Component {

    render() {
        return (
            <div>TestCpn</div>
        );
    }


}