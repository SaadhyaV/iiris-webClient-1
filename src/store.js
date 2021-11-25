import { createStore } from "redux";
import reducers from "./reducers";

// Added to inspect redux from devtools
const store = createStore( reducers, window.devToolsExtension && window.devToolsExtension());
const $store = store;
store.delayedDispatch = (message, timeout) => setTimeout(()=> $store.dispatch(message), timeout);
store.cancelDispatch = dispatchId => clearTimeout(dispatchId);
export default store;
