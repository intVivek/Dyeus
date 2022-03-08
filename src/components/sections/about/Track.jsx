import Woman1 from '../../../assets/img/picture/woman1.png';
import Woman2 from '../../../assets/img/picture/woman2.png';
import Woman3 from '../../../assets/img/picture/woman3.png';
import Woman4 from '../../../assets/img/picture/woman4.png';
import styles from '../../../assets/styles/components/sections/about/track.module.scss';
import Button from '../../base/Button';

export default function Track () {
	return (
		<div className={styles.track}>
			<div className={styles.hero}>
				<h1>Track your mood</h1>
				<p>All days and all moods are not made equal. But we can only improve what we measure.
					Track your mood and vitals (including skin and hair health)
					so you can take better care of yourself every day.</p>
				<Button className={styles.trackMood} label='Track you mood on the app' />
			</div>
			<div className={styles.footer}>
				<img src={Woman1} />
				<img src={Woman2} />
				<img src={Woman3} />
				<img src={Woman4} />
			</div>
		</div>
	);
}
