import styles from '../../../assets/styles/components/sections/about/flaunt.module.scss';

export default function Flaunt () {
	return (
		<div className={styles.flaunt}>
			<div className={styles.hero}>
				<h1>What makes us different?</h1>
				<h3>Reimagining and rewiring self-care</h3>
			</div>
			<div className={styles.description}>
				<p>You care about conscious consumption, and so do we.</p>
				<p>When it comes to your health, “good enough” is not good enough.
					We’re here to flip the script on that narrative because you deserve the best</p>
				<p>We collaborate with researchers and doctors to</p>
				<ul>
					<li>Help you get granular about your health and self-care with personalized insights, and</li>
					<li >Equip you with simple, sustainable products that get the job done</li>
				</ul>
				<p>No to-the-moon-and-back claims in this neck of the woods.</p>
				<p>We’re just solving real problems for real people here.</p>
			</div>
		</div>
	);
}
