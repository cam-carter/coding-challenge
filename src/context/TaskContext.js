import { createContext } from 'react'

export default createContext({
    tasks: [],
    completeTask: task => {},
  })
