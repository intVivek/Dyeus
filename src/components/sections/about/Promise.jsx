import Background from '../../../assets/img/picture/rose.png';
import styles from '../../../assets/styles/components/sections/about/promise.module.scss';
import Button from '../../base/Button';

export default function Promise () {
	return (
		<div className={styles.promise}>
			<div className={styles.hero}>
				<h1>Liberate your everyday wellness</h1>
				<h3>Shop our self-care products</h3>
				<p>Gentle formulations thoughtfully engineered by specialist researchers and doctors to
					simplify your self-care and get results fast. And, we always list our ingredients -
					so what you see is what you get.</p>
				<div>
					<Button className={styles.upgrade} label='Upgrade your self-care' />
					<span>#NoNasties, we promise!</span>
				</div>
			</div>
			<div className={styles.footer}>
				<span style={{ backgroundImage: `url(${Background})` }} />
			</div>
		</div>
	);
}
