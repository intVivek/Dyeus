import styles from '../../styles/components/base/iconButton.module.scss';

export default function IconButton (props) {
	const { icon: Icon } = props;
	return (
		<div className={styles.iconButton}>
			<Icon />
		</div>
	);
}
