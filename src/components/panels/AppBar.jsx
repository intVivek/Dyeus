import { ReactComponent as Bell } from '../../assets/img/icons/bell.svg';
import { ReactComponent as Cart } from '../../assets/img/icons/cart.svg';
import { ReactComponent as Hamburger } from '../../assets/img/icons/hamburger.svg';
import { ReactComponent as RightArrow } from '../../assets/img/icons/rightArrow.svg';
import styles from '../../assets/styles/components/panels/appBar.module.scss';
import IconButton from '../base/IconButton';

export default function AppBar (props) {
	const { navActive, toggleNav } = props;
	return (
		<div className={`${styles.appBar} ${navActive ? styles.navActive : ''}`} >
			<div className={styles.hamburger} onClick={toggleNav}>
				{
					!navActive
						? <IconButton icon={Hamburger} />
						: <IconButton className={styles.back} icon={RightArrow} />
				}
			</div>
			<div className={styles.options} >
				<IconButton icon={Cart} />
				<IconButton icon={Bell} />
			</div>
		</div>
	);
}
