import styles from '../../assets/styles/components/base/button.module.scss';

export default function Button (props) {
	const { className, iconLeft: IconLeft, iconRight: IconRight, label = '', onClick } = props;

	return (
		<div className={`${styles.button} ${className ? className : ''}`} onClick={onClick}>
			<span>{IconLeft && <IconLeft />}</span>
			<p>{label}</p>
			<span>{IconRight && <IconRight />}</span>
		</div>
	);
}
