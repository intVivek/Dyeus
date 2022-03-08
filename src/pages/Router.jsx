import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';

export default function Router () {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route exact path='/' component={About} />
				<Route exact path='/*' render={() => <Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};
