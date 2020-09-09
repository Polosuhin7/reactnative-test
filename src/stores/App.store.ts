import {IAppStore} from "../common/App";
import {action, observable} from "mobx";

class AppStore implements IAppStore {
    @observable
    public isAuth: boolean = false;

    @action
    public setAuth(value: boolean) {
        this.isAuth = value;
    }
}

export default AppStore;
