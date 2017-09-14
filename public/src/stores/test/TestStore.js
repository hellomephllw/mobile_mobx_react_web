import { observable, action } from 'mobx';
import api from '../../api';

class TestStore {

    @observable name = 'zhangsan';
    @observable age = 18;

    @action doSomething() {
        ++this.age;
    }

    @action async getInfo() {
        const json = await api.getProfile();
        console.log(json);
    }

}

export default new TestStore();