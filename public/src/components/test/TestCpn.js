import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TestStore')
@observer
export default class TestCpn extends Component {

    constructor(props) {
        super(props);
        this._onClickDoSomething = this._onClickDoSomething.bind(this);
    }

    _onClickDoSomething() {
        this.props.TestStore.doSomething();
    }

    render() {
        const { name, age } = this.props.TestStore;
        return (
            <div>
                <p>TestCpn</p>
                <p>name:{ name }</p>
                <p>age:{ age }</p>
                <button onClick={this._onClickDoSomething}>do something</button>
            </div>
        );
    }

}