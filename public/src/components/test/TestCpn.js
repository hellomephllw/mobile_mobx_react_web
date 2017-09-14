import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TestStore')
@observer
export default class TestCpn extends Component {

    constructor(props) {
        super(props);
        this._onClickDoSomething = this._onClickDoSomething.bind(this);
        this._onClickGetInfo = this._onClickGetInfo.bind(this);
    }

    _onClickDoSomething() {
        this.props.TestStore.doSomething();
    }

    _onClickGetInfo() {
        this.props.TestStore.getInfo();
    }

    render() {
        const { name, age } = this.props.TestStore;
        return (
            <div>
                <p>TestCpn</p>
                <p>name:{ name }</p>
                <p>age:{ age }</p>
                <button onClick={this._onClickDoSomething}>do something</button>
                <button onClick={this._onClickGetInfo}>get info</button>
            </div>
        );
    }

}