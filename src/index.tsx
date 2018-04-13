import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
// import reducers from './store/reducers'
import enthusiasm from './store/reducers/index';
import { StoreState } from './store/types/index';
// import Hello from './components/Hello'
// console.log(enthusiasm, 'enthusiasm')
const store = createStore<StoreState>(enthusiasm)
// const store=() => {
//     return createStore<any>(
//         enthusiasm
//     );
// }
console.log(store.getState(), '111999')
// console.log(store)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  // <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
