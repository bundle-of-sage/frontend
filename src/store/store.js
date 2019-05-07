import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers/userReducer";
import membershipReducer from "./reducers/membershipReducer";
import rootSaga from "./sagas/";

const rootReducer = combineReducers({
  user: userReducer,
  membership: membershipReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
export default store;
