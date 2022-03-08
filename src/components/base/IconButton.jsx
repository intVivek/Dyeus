import styles from '../../assets/styles/components/base/iconButton.module.scss';

export default function IconButton (props) {
	const { icon: Icon } = props;
	return (
		<div className={styles.iconButton}>
			{Icon && <Icon />}
		</div>
	);
}
