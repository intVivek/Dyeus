import { ReactComponent as Facebook } from '../../../assets/img/icons/facebook.svg';
import { ReactComponent as RightArrow } from '../../../assets/img/icons/rightArrow.svg';
import { ReactComponent as Twitter } from '../../../assets/img/icons/twitter.svg';
import styles from '../../../assets/styles/components/sections/about/footer.module.scss';
import Button from '../../base/Button';

export default function Footer () {
	return (
		<div className={styles.footer}>
			<div className={styles.hero}>
				<h1>With Diana, you’re in control of your health, your every day, and your story.</h1>
			</div>
			<div className={styles.footerPane}>
				<div className={styles.social} >
					<Facebook />
					<Twitter />
				</div>
				<div className={styles.nav} >
					<Button className={styles.navButton} label='Products' iconRight={RightArrow} />
					<Button className={styles.navButton} label='Our Science' iconRight={RightArrow} />
					<Button className={styles.navButton} label='Vision & Mission' iconRight={RightArrow} />
					<Button className={styles.navButton} label='About Us' iconRight={RightArrow} />
				</div>
				<div className={styles.separator} />
				<p className={styles.subscribe}>Subscribe to our Newsletter</p>
				<div className={styles.newsLetter} >
					<input type='text' placeholder='Enter your email...' />
				</div>
			</div>
		</div>
	);
}
