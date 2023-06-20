import { Suspense } from 'solid-js'
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Link,
	Meta,
	Routes,
	Scripts,
	Title,
} from 'solid-start'
import './root.scss'

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>ui-comp-test</Title>
				<Meta charset="utf-8" />
				<Link
					rel="icon"
					type="image/svg+xml"
					href="/images/favicon.svg"
				/>
				<Link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Noto+Sans:400,500,600,700"
					media="all"
				/>
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	)
}
