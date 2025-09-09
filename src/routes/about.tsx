import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'

function About() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center">
      <h1 className="my-2 text-3xl font-medium">Hello from About!</h1>
      <ChevronDown className="my-2 text-neutral-800 dark:text-neutral-400" />
      <p className="text-sm text-neutral-800 dark:text-neutral-400">
        Go to{' '}
        <code className="mx-2 rounded bg-neutral-300 px-1 py-0.5 dark:bg-neutral-700">
          /routes/about.tsx
        </code>
        to edit this page.
      </p>
    </main>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
})
