import { observable, action } from 'mobx';
import { create, persist } from 'mobx-persist';

class TestPersist {
    @persist @observable name = 'llw';
    @persist @observable age = 18;

    @action increase() {
        ++this.age;
    }

}

const testPersist = new TestPersist();

create({})('TestPersist', testPersist);

export default testPersist;