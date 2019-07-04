import React from 'react'

import useHello from '@jsjoeio/hello-component'

const App = () => {

  useHello('John')
  return (
    <div>
      <h1>hiii</h1>
    </div>
  )
}

export default App
