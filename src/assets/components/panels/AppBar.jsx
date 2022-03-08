import { ReactComponent as Bell } from '../../img/icons/bell.svg';
import { ReactComponent as Cart } from '../../img/icons/cart.svg';
import { ReactComponent as Hamburger } from '../../img/icons/hamburger.svg';
import styles from '../../styles/components/panels/appBar.module.scss';
import IconButton from '../base/IconButton';

export default function AppBar (props) {
	return (
		<div className={styles.appBar} >
			<div className={styles.hamburger}>
				<IconButton icon={Hamburger} />
			</div>
			<div className={styles.options} >
				<IconButton icon={Cart} />
				<IconButton icon={Bell} />
			</div>
		</div>
	);
}
