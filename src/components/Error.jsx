import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
  return (
    <div>
        <h1>OPPS!!!</h1>
        <h2>Something Went Wrong</h2>
        <h3>
            {err.status} and {err.statusText}
        </h3>
    </div>
  )
}

export default Error