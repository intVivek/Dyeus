import { useNavigate } from 'react-router-dom';

import { ReactComponent as RightArrow } from '../../assets/img/icons/rightArrow.svg';
import styles from '../../assets/styles/components/panels/navigation.module.scss';
import Button from '../base/Button';

export default function Navigation (props) {
	const { navActive, toggleNav } = props,
		navigate = useNavigate(),

		onNavigate = (path) => {
			toggleNav();
			navigate(path);
		};
	return (
		<div className={`${styles.navigation} ${navActive ? styles.active : ''}`} >
			<Button className={styles.navButton} label='Home' iconRight={RightArrow} onClick={() => onNavigate('/')} />
			<Button className={styles.navButton} label='About' iconRight={RightArrow} onClick={() => onNavigate('/about')} />
			<Button className={styles.navButton} label='Products' iconRight={RightArrow} onClick={() => onNavigate('/products')} />
			<Button className={styles.navButton} label='Pricing' iconRight={RightArrow} onClick={() => onNavigate('/pricing')} />
			<Button className={styles.navButton} label='Contact' iconRight={RightArrow} onClick={() => onNavigate('/contact')} />
		</div>
	);
}
