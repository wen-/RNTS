import BaseActions from "tools/baseActions";

export default class Actions extends BaseActions {

    public init() {
        this.props.dispatch({ type: "testData/getOrderDetail", params: { id: 123 } });
    }

    public changeName(name: any) {
        this.props.dispatch({ type: "testData/setOrdersDetail", data: { name } });
    }

}
