import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Construction from '../components/panels/Construction';
import About from './About';

export default function Router () {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route exact path='/' >
					<Route index element={<About />} />
					<Route path='about' element={<About />} />
					<Route path='products' element={<Construction />} />
					<Route path='pricing' element={<Construction />} />
					<Route path='contact' element={<Construction />} />
				</Route>
				<Route exact path='/*' render={() => <Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}
