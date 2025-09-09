import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

function RootComponent() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-medium">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-medium">
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
