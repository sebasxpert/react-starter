import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwindcss.svg'
import Counter from '@/features/count/Counter'

function Index() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center">
      <div className="mb-4 flex gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="size-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-20 animate-spin" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="size-20" alt="TailwindCSS logo" />
        </a>
      </div>
      <h1 className="my-2 text-3xl font-medium">React Starter</h1>
      <Counter />
      <ChevronDown className="my-2 text-neutral-800 dark:text-neutral-400" />
      <p className="text-sm text-neutral-800 dark:text-neutral-400">
        Click on the logos to learn more
      </p>
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
