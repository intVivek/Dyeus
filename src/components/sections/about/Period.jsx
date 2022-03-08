import Calendar from '../../../assets/img/picture/calendar.png';
import styles from '../../../assets/styles/components/sections/about/period.module.scss';
import Button from '../../base/Button';

export default function Period () {
	return (
		<div className={styles.period}>
			<div className={styles.hero}>
				<h1>Track your period</h1>
				<p>Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions.
					The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.</p>
				<Button className={styles.trackPeriod} label='Track you period on the app' />
			</div>
			<div className={styles.footer}>
				<span style={{ backgroundImage: `url(${Calendar})` }} />
			</div>
		</div>
	);
}
