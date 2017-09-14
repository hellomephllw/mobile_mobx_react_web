import React from 'react';
import { inject, observer } from 'mobx-react';
import BaseCpn from '../../common/components/base/BaseCpn';

@inject('TestStore')
@observer
export default class Test2Cpn extends BaseCpn {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.getNavPassedProps());
        return (
            <div>
                <p>Test2Cpn</p>
            </div>
        );
    }

}