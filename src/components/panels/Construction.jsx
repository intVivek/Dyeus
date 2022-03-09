import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from '../../assets/styles/components/panels/construction.module.scss';
import Button from '../base/Button';
import AppBar from './AppBar';
import Navigation from './Navigation';

export default function Construction (props) {
	const [navActive, setNavActive] = useState(false),
		navigate = useNavigate();
	return (
		<div className={styles.construction} >
			<AppBar navActive={navActive} toggleNav={() => setNavActive((active) => !active)} />
			<Navigation navActive={navActive} toggleNav={() => setNavActive((active) => !active)} />
			<h1>Under Construction!</h1>
			<p>Sorry! This page is under development.</p>
			<Button className={styles.home} label='Back to home' onClick={() => navigate('/')} />
		</div>
	);
}
