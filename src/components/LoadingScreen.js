import React from 'react'
import ReactLoading from 'react-loading'

export default function LoadingScreen() {
  return (
    <div
      style={{
        // do your styles depending on your needs.
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ReactLoading type='balls' color='White' />
    </div>
  )
}
