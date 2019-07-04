import React from 'react'


export default function useHello (person, dependencies = []) {
  React.useEffect(() => {
    console.log(`Hello, ${person}`)
  },dependencies)
}

const HelloComponent = () => <div> Hello World! </div>

// export default HelloComponent