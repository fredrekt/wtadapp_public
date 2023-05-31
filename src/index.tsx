import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import ar_EG from 'antd/locale/ar_EG';
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

axios.defaults.baseURL = 'https://wtadapp.herokuapp.com/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

root.render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#411BFF',
					borderRadius: 20,
					borderRadiusLG: 40,
					fontFamily: `Vazirmatn, sans-serif`
				}
			}}
			locale={ar_EG}
		>
			<Router>
				<App />
			</Router>
		</ConfigProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
