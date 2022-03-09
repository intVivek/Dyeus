import Product from '../../../assets/img/picture/product.png';
import styles from '../../../assets/styles/components/sections/about/periodBox.module.scss';
import Button from '../../base/Button';

export default function PeriodBox () {
	return (
		<div className={styles.periodBox}>
			<div className={styles.hero}>
				<h1>Get your personalized period box</h1>
				<img src={Product} />
				<p>Tailor your monthly box of organic period products without the organic price tag (no pink taxing here).
					Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.</p>
			</div>
			<div className={styles.footer}>
				<Button className={styles.createBox} label='Create your box on the app' />
			</div>
		</div>
	);
}
