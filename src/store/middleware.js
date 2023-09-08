import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default () => {
  const middleware = [];

  middleware.push(thunk);

  middleware.push(
    createLogger({
      level: 'log',
    })
  );

  return applyMiddleware(...middleware);
};
