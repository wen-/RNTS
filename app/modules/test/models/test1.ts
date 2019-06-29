import {
  odPrams,
  fetchOrderDetail
} from '../api/test1';
import {Model} from "tools/dva";

export default <Model>{
  namespace: 'testData',
  state: {
    name: '测试员11111',
  },
  effects: {
    //详情
    *getOrderDetail(params: odPrams, { call, put }) {
      console.log(params);
      const result = yield call(fetchOrderDetail, params);
      if(result.code==200) {
        const data = result.data;
        yield put({ type: 'setOrdersDetail', data: {name: data} });
      }
    }
  },
  reducers: {
    setOrdersDetail(state, { data }) {
      return { ...state, ...data }
    },
    clearOrdersDetail() {
      return { }
    },
  }
};
