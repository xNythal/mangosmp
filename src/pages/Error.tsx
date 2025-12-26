import { useRouteError, isRouteErrorResponse } from "react-router-dom"

function Error() {
  const error = useRouteError()

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div>
        <h1>Oops...!</h1>
        <h2>404</h2>
        <h3>Page not found</h3>
      </div>
    )
  }

  return <div>Error</div>
}
export default Error
