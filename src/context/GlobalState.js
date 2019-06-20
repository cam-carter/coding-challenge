import React, { useReducer, useEffect } from 'react'
import TaskContext from './TaskContext'
import { taskReducer, COMPLETE_TASK, RECEIVE_TASKS } from './reducers'

const GlobalState = (props) => {
  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((response) => response.json())
      .then((response) => {
        receiveTasks(response)
      })
  }, [])

  const [state, dispatch] = useReducer(taskReducer, { tasks: [] })

  const receiveTasks = (tasks) => {
    setTimeout(() => {
      dispatch({ type: RECEIVE_TASKS, tasks: tasks })
    }, 500)
  }

  const completeTask = (task) => {
    setTimeout(() => {
      dispatch({ type: COMPLETE_TASK, task: task })
    }, 500)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        completeTask: completeTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default GlobalState
