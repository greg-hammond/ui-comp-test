import { Outlet } from '@solidjs/router'
import { Title } from 'solid-start'
import { Header } from '~/components'
import styles from './Layout.module.scss'

export default function Layout() {
	return (
		<div class={styles.layout}>
			<Title>UI Comp Test</Title>
			<Header />
			<div class={styles.therest}>
				<div class={styles.outlet}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
