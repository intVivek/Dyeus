import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import About from './About';

export default function Router () {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route exact path='/' >
					<Route index element={<About />} />
					<Route path='about' element={<About />} />
				</Route>
				<Route exact path='/*' render={() => <Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}
