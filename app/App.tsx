import React from 'react';

import dva from 'tools/dva';
import { createLogger } from 'redux-logger';
import Router from './Router';
import Models from './dvaModel';

const app = dva({
  initialState: {},
  onAction: createLogger()
});

Object.keys(Models).map((key) => {
  // @ts-ignore
  app.model(Models[key]);
  return null;
});

// @ts-ignore
app.router(() => (<Router {...this.props} />));

export default app.start();
