import React from 'react';
import invariant from 'invariant';
const { create } = require('dva-core');
const { isFunction } = require('dva-core/lib/utils');
import { Provider, connect } from 'react-redux';
import {
  Reducer,
  Action,
  ReducersMapObject,
  Dispatch,
} from 'redux';

export { connect };

export default function (opts = {}) {
  const app = create(opts);
  const oldAppStart = app.start;
  app.router = router;
  app.start = start;
  return app;

  function router(router: any) {
    invariant(
      isFunction(router),
      `[app.router] router should be function, but got ${typeof router}`,
    );
    app._router = router;
  }

  function start() {
    // 路由必须提前注册
    invariant(
      app._router,
      `[app.start] router must be registered before app.start()`,
    );

    if (!app._store) {
      oldAppStart.call(app);
    }
    const store = app._store;

    // export _getProvider for HMR
    // ref: https://github.com/dvajs/dva/issues/469
    app._getProvider = getProvider.bind(null, store, app);

    return getProvider(store, app, app._router);
  }
}

function getProvider(store: any, app: any, router: any) {
  return (extraProps?: any) => (
    <Provider store={store}>
      { router({ app, ...extraProps }) }
    </Provider>
  );
}

export interface EffectsCommandMap {
  put: <A extends Action>(action: A) => any;
  call: Function;
  select: Function;
  take: Function;
  cancel: Function;
  [key: string]: any;
}
export interface EffectsMapObject {
  [key: string]: Effect | EffectWithType;
}
export interface ReducerEnhancer {
  (reducer: Reducer<any>): void;
}
export interface SubscriptionAPI {
  dispatch: Dispatch<any>;
}
export type ActionWithPayload = {action: Action, payload: any};
export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
export type EffectWithType = [Effect, { type: EffectType }];
export type Effect = (action: ActionWithPayload, effects: EffectsCommandMap) => void;
export type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer];
export type Subscription = (api: SubscriptionAPI, done: Function) => void;
export interface SubscriptionsMapObject {
  [key: string]: Subscription;
}
export interface Model {
  namespace: string;
  state?: any;
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}