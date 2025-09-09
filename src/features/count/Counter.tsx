import { useCount } from '@/store/count'

const Counter = () => {
  const [count, setCount] = useCount()

  return (
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
  )
}
export default Counter
