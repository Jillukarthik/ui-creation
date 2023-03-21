import React from 'react'

function ShowError({error}) {
  return (
    <>
    <div>ShowError</div>
    <div>{error.message}</div>
    </>
  )
}

export default ShowError