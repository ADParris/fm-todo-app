import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';

import { reportWebVitals, serviceWorker } from 'utils';

import { App } from 'components';

render(
	<React.StrictMode>
		<ColorModeScript initialColorMode="system" />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
