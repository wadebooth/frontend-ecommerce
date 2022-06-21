import React from 'react'
import ReactLoading from 'react-loading'

export default function LoadingScreen() {
  return (
    <div>
      <ReactLoading type='balls' color='#0000FF' height={100} width={50} />
    </div>
  )
}
