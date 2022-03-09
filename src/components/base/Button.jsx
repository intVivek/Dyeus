import styles from '../../assets/styles/components/base/button.module.scss';

export default function Button (props) {
	const { className, iconLeft: IconLeft, iconRight: IconRight, label = '' } = props;

	return (
		<div className={`${styles.button} ${className ? className : ''}`}>
			<span>{IconLeft && <IconLeft />}</span>
			<p>{label}</p>
			<span>{IconRight && <IconRight />}</span>
		</div>
	);
}
