import { ReactComponent as Phone } from '../../../assets/img/icons/phone.svg';
import { ReactComponent as Star } from '../../../assets/img/icons/star.svg';
import { ReactComponent as TestTube } from '../../../assets/img/icons/testTube.svg';
import styles from '../../../assets/styles/components/sections/about/landing.module.scss';

export default function About () {
	return (
		<div className={styles.landing}>
			<div className={styles.hero}>
				<h1>About Diana</h1>
				<h3>A platform that looks out for you</h3>
				<p>Diana empowers you to understand how your body works so you can look and feel your best.</p>
			</div>
			<div className={styles.separator} />
			<div className={styles.philosophy}>
				<h1>Our Philosophy</h1>
				<h3>Sustainable wellness is a big-picture, inside out approach</h3>
				<p>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make
					informed decisions about their health and wellness.</p>
			</div>
			<div className={styles.features}>
				<p>That’s why we’ve created an integrated ecosystem of:</p>
				<div className={styles.cards}>
					<div className={styles.card}>
						<TestTube />
						<p>Consciously formulated products that deliver feel-good results fast</p>
					</div>
					<div className={styles.card}>
						<Star />
						<p>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p>
					</div>
					<div className={styles.card}>
						<Phone />
						<p>In-app consultation portals that connect you with compassionate wellness experts</p>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<p>Consider us your nerdy ally who spends their time perfecting products that work because they want
					you to feel your best everyday.</p>
			</div>
		</div>
	);
}
