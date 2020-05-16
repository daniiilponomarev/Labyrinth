import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

export const configureStore = () => {
  const middlewares = [thunk];

  // if (process.env.NODE_ENV !== 'production') {
  //     middlewares.push(createLogger());
  // }

  return createStore(
    reducers,
    composeWithDevTools({ name: 'Labyrinth', trace: true })(applyMiddleware(...middlewares))
  );
};
