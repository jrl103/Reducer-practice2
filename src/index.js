import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// store 준비가 끝났으니 component와 연결해주기
// react-redux의 provider 사용해서 주입시키기

import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* 어떤 데이터를 가지고 있을지 store 주입시키기 */}
    {/* contextAPI : value 사용
    redux : store 사용 */}

    <App />
    
  </Provider>
);


