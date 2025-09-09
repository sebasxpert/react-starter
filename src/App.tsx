import { ChevronDown } from 'lucide-react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwindcss.svg'
import { useCount } from '@/store/count'

function App() {
  const [count, setCount] = useCount()

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
      <h1 className="my-2 text-3xl font-medium">Vite + React + Tailwind</h1>
      <div className="mb-1 rounded-2xl border-2 border-neutral-300 px-4 py-2 dark:border-neutral-700">
        <button
          className="mb-1.5 rounded bg-blue-200 px-2 py-1 dark:bg-blue-800"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="py-1">
          Edit
          <code className="mx-2 rounded bg-neutral-300 px-1 py-0.5 dark:bg-neutral-700">
            src/App.tsx
          </code>
          and save to test HMR
        </p>
      </div>
      <ChevronDown className="my-2 text-neutral-800 dark:text-neutral-400" />
      <p className="text-sm text-neutral-800 dark:text-neutral-400">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
