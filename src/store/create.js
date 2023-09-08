import { legacy_createStore, compose } from 'redux';
import reducers from '../reducers';
import createMiddleware from './middleware';

export default () => legacy_createStore(reducers, compose(createMiddleware()));
