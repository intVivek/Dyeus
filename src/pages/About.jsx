import styles from '../assets/styles/pages/about.module.scss';
import AppBar from '../components/panels/AppBar';
import Flaunt from '../components/sections/about/Flaunt';
import Landing from '../components/sections/about/Landing';

export default function About () {
	return (
		<div className={styles.about}>
			<AppBar />
			<Landing />
			<Flaunt />
		</div>
	);
}
