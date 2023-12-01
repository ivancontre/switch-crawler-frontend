import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import SwitchCrawlerApp from './SwitchCrawlerApp';


ReactDOM.render(
	<Provider store={ store } >
		<SwitchCrawlerApp />
	</Provider>

    ,
  document.getElementById('root')
);