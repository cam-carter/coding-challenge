import React from 'react'
import _ from 'lodash'
import TaskContext from '../context/TaskContext'
import TaskGroup from '../components/TaskGroup'

const TaskOverview = () => {
  return (
    <TaskContext.Consumer>
      {context => (
        <div className="container">
          <h1 className="is-size-1">Things To Do</h1>
          <hr/>
          {
            _.chain(context.tasks)
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
      )}
    </TaskContext.Consumer>
  )
}

export default TaskOverview
