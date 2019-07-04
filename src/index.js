import React, { useEffect } from 'react'


export function useHello (person, dependencies = []) {
  useEffect(() => {
    console.log(`Hello, ${person}`)
  },dependencies)
}

const HelloComponent = () => <div> Hello World! </div>

export default HelloComponent