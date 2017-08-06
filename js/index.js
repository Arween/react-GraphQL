import React from 'react';
import ReactDOM from 'react-dom';
import Authors from './components/Authors';
import Adder from './components/Adder';
import Menu from './components/Menu';

// ReactDOM.render(
// 		  <h1>Hello, world!</h1>,
// 		    document.getElementById('root')

// 		);
ReactDOM.render(
		  <Authors />,
		    document.getElementById('root')
		);
ReactDOM.render(
		  <Adder />,
		    document.getElementById('modals')
		);
ReactDOM.render(
		  <Menu />,
		    document.getElementById('menudiv')
		);
