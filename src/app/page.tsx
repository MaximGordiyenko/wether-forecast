import { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary";
import { App } from '@/components/App';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading weather...</p>}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <App/>
        </ErrorBoundary>
      </Suspense>
    </main>
  )
}
