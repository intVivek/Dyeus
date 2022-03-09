import { useNavigate } from 'react-router-dom';

import { ReactComponent as RightArrow } from '../../assets/img/icons/rightArrow.svg';
import styles from '../../assets/styles/components/panels/navigation.module.scss';
import Button from '../base/Button';

export default function Navigation (props) {
	const { navActive } = props,
		navigate = useNavigate();
	return (
		<div className={`${styles.navigation} ${navActive ? styles.active : ''}`} >
			<Button className={styles.navButton} label='Home' iconRight={RightArrow} onClick={() => navigate('/')} />
			<Button className={styles.navButton} label='About' iconRight={RightArrow} onClick={() => navigate('/about')} />
			<Button className={styles.navButton} label='Products' iconRight={RightArrow} onClick={() => navigate('/products')} />
			<Button className={styles.navButton} label='Pricing' iconRight={RightArrow} onClick={() => navigate('/pricing')} />
			<Button className={styles.navButton} label='Contact' iconRight={RightArrow} onClick={() => navigate('/contact')} />
		</div>
	);
}
