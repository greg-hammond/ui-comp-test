import { Button } from '~/ui'
import styles from './Home.module.scss'

export default function Home() {
	const handleClick = (msg: string) => {
		console.log(msg)
	}

	return (
		<div class={styles.page}>
			<h3>Test 'Button' component within this project:</h3>
			<Button onClick={() => handleClick('button')}>
				This is a Button
			</Button>
		</div>
	)
}
