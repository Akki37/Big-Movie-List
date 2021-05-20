import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import configStore from './store/configStore';

const store = configStore()
store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(
<Provider store={store}><App /></Provider>
,
  document.getElementById('root')
);

