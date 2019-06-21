import React, { useContext } from 'react'
import _ from 'lodash'
import TaskContext from '../context/TaskContext'
import TaskGroup from '../components/TaskGroup'

const TaskOverview = () => {
  const { tasks, _completeTask } = useContext(TaskContext)
  return (
    <div className="container">
      <h1 className="is-size-1">Things To Do</h1>
      <hr/>
      {
        _.chain(tasks)
         .groupBy('group')
         .toPairs()
         .map(([group, tasks]) => {
           return (
             <TaskGroup key={group} group={group} tasks={tasks} />
           )
         })
         .value()
      }
    </div>
  )
}

export default TaskOverview
