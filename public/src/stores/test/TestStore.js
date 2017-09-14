import { observable, action } from 'mobx';

class TestStore {

    @observable name = 'zhangsan';
    @observable age = 18;

    @action doSomething() {

    }

}

export default new TestStore();