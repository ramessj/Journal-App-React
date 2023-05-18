import { Provider } from 'react-redux';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';

import { JournalApp } from './JournalApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={ store }>
		<HashRouter>
			<JournalApp />
		</ HashRouter>
	</Provider>
);
