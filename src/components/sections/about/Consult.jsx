import Doctor from '../../../assets/img/picture/doctor.png';
import styles from '../../../assets/styles/components/sections/about/consult.module.scss';
import Button from '../../base/Button';

export default function Consult () {
	return (
		<div className={styles.consult}>
			<div className={styles.hero}>
				<h1>Consult with wellness experts</h1>
				<p>Set up health consultations with experienced doctors and therapists on our app. Simply select a service,
					 answer a few questions, and we’ll connect you to someone who is the right-fit for you.</p>
				<Button className={styles.consultation} label='Get a consultation' />
			</div>
			<div className={styles.footer}>
				<span style={{ backgroundImage: `url(${Doctor})` }} />
			</div>
		</div>
	);
}
