import styles from '../../assets/styles/components/base/button.module.scss';

export default function Button (props) {
	const { className, icon: Icon, label = '' } = props;

	return (
		<div className={`${styles.button} ${className ? className : ''}`}>
			{Icon && <Icon />}
			<p>{label}</p>
		</div>
	);
}
