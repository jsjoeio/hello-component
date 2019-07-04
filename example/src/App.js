import React from 'react'

import HelloComponent, { useHello } from '@jsjoeio/hello-component'

const App = () => {

  useHello('John')
  return (
    <div>
      <HelloComponent />
    </div>
  )
}

export default App
