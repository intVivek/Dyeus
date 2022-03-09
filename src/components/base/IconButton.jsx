import styles from '../../assets/styles/components/base/iconButton.module.scss';

export default function IconButton (props) {
	const { className, icon: Icon } = props;
	return (
		<div className={`${styles.iconButton} ${className ? className : ''}`}>
			{Icon && <Icon />}
		</div>
	);
}
