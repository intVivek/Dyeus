import styles from '../assets/styles/pages/about.module.scss';
import AppBar from '../components/panels/AppBar';
import Flaunt from '../components/sections/about/Flaunt';
import Landing from '../components/sections/about/Landing';
import Promise from '../components/sections/about/Promise';
import Track from '../components/sections/about/Track';

export default function About () {
	return (
		<div className={styles.about}>
			<AppBar />
			<Landing />
			<Flaunt />
			<Promise />
			<Track />
		</div>
	);
}
