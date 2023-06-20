import { JSX } from 'solid-js'
import styles from './Button.module.scss'

interface ButtonProps {
	children?: JSX.Element
	onClick: () => void
}

export default function Button(props: ButtonProps) {
	return (
		<button class={styles.button} onClick={() => props.onClick()}>
			{props.children}
		</button>
	)
}
