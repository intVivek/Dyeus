import styles from '../assets/styles/pages/about.module.scss';
import AppBar from '../components/panels/AppBar';
import Consult from '../components/sections/about/Consult';
import Flaunt from '../components/sections/about/Flaunt';
import Footer from '../components/sections/about/Footer';
import Landing from '../components/sections/about/Landing';
import Period from '../components/sections/about/Period';
import PeriodBox from '../components/sections/about/PeriodBox';
import Promise from '../components/sections/about/Promise';
import Track from '../components/sections/about/Track';

export default function About () {
	return (
		<div className={styles.about}>
			<AppBar />
			<div className={styles.sections}>
				<Landing />
				<Flaunt />
				<Promise />
				<Track />
				<Period />
				<Consult />
				<PeriodBox />
				<Footer />
			</div>
		</div>
	);
}
