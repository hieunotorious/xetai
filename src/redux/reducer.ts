import { combineReducers } from 'redux';
import globalReducer from 'redux/reducers/globalReducer';
import { PersistConfig, persistReducer } from 'redux-persist';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: require('redux-persist/lib/storage').default,
  whitelist: ['global'],
};

export const reducer = (() => {
  const rootReducer = combineReducers({
    global: globalReducer.reducer,
  });

  return persistReducer(persistConfig, rootReducer);
})();

export const actions = {
  global: globalReducer.actions,
} as const;

export const selectors = {
  global: globalReducer.selectors,
} as const;
